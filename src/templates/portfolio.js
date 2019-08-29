import React, { useState } from "react"
import Layout from "../components/DefaultLayout.js"
import { Player, ControlBar, BigPlayButton } from "video-react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./device.min.css"
import arrow from "../images/arrow.svg"
import { graphql } from "gatsby"

function PrevArrow(props) {
  return (
    <div onClick={props.onClick}>
      <img className="arrow left" src={arrow} alt="arrow" />
      <style jsx>
        {`
          .arrow.left {
            cursor: pointer;
            width: 4rem;
            z-index: 10;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-100%, -50%) rotate(180deg);
          }
          @media only screen and (max-width: 600px) {
            .arrow.left {
              width: 2rem;
              transform: translate(-50%, -50%) rotate(180deg);
            }
          }
        `}
      </style>
    </div>
  )
}

function NextArrow(props) {
  return (
    <div onClick={props.onClick}>
      <img className="arrow right" src={arrow} alt="arrow" />
      <style jsx>
        {`
          .arrow.right {
            cursor: pointer;
            width: 4rem;
            z-index: 10;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(100%, -50%);
          }
          @media only screen and (max-width: 600px) {
            .arrow.right {
              width: 2rem;
              transform: translate(50%, -50%);
            }
          }
        `}
      </style>
    </div>
  )
}

const Portfolio = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const portfolio = data.markdownRemark.frontmatter
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    afterChange: current => setActiveSlide(current),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <Layout>
      {portfolio.video && (
        <section className="video video-full">
          <Player
            fluid={true}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            src={portfolio.video}
          >
            <ControlBar disableCompletely={true} />
            <BigPlayButton position="center" />
          </Player>
        </section>
      )}
      <main>
        <section className="heading">
          <h1 className="project-title">{portfolio.title}</h1>
        </section>
        <section className="description">
          <div className="points">
            <div>
              <h3>Client</h3>
              <p>{portfolio.client}</p>
            </div>
            <div>
              <h3>Location</h3>
              <p>{portfolio.location}</p>
            </div>
            <div>
              <h3>Work</h3>
              <p>{portfolio.work}</p>
            </div>
            <div>
              <h3>Team</h3>
              <p>{portfolio.team}</p>
            </div>
          </div>
          <div>
            <p>{portfolio.description}</p>
            {portfolio.link && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={portfolio.link}
              >
                LAUNCH PROJECT
              </a>
            )}
          </div>
        </section>

        <section className="process">
          <div className="challenge">
            <h3>THE CHALLENGE</h3>
            <p>{portfolio.challenge}</p>
          </div>
          <div className="solution">
            <h3>THE SOLUTION</h3>
            <p>{portfolio.solution}</p>
          </div>
        </section>

        {portfolio.mainImages && (
          <section className="main-image-gallery">
            {portfolio.mainImages.map((i, index) => (
              <div
                key={index}
                className="main-image"
                style={{ backgroundImage: `url(${i})` }}
              />
            ))}
          </section>
        )}

        {portfolio.galleryImages && (
          <section className="square-gallery">
            {portfolio.galleryImages.map((i, index) => (
              <div className="square-container" key={index}>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${i})` }}
                />
              </div>
            ))}
          </section>
        )}
        {portfolio.galleryVideos && (
          <section className="video-gallery">
            <Slider {...settings}>
              {portfolio.galleryVideos.map((i, index) => (
                <div
                  className={`device-container ${
                    (activeSlide + 1) % portfolio.galleryVideos.length === index
                      ? "active"
                      : ""
                  }`}
                  key={index}
                >
                  <div className="marvel-device iphone-x">
                    <div className="notch">
                      <div className="camera"></div>
                      <div className="speaker"></div>
                    </div>
                    <div className="top-bar"></div>
                    <div className="sleep"></div>
                    <div className="bottom-bar"></div>
                    <div className="volume"></div>
                    <div className="overflow">
                      <div className="shadow shadow--tr"></div>
                      <div className="shadow shadow--tl"></div>
                      <div className="shadow shadow--br"></div>
                      <div className="shadow shadow--bl"></div>
                    </div>
                    <div className="inner-shadow"></div>
                    <div className="screen">
                      <div className="video-container">
                        <div className="video video-mobile">
                          <Player
                            fluid={true}
                            playsInline={true}
                            aspectRatio="9:19.5"
                            src={i}
                          >
                            <ControlBar disableCompletely={true} />
                            <BigPlayButton position="center" />
                          </Player>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        )}
      </main>

      <style jsx>
        {`
          main {
            width: 70%;
            margin: 10rem auto 0;
          }

          .video {
            width: 100%;
          }

          .project-title {
            text-transform: uppercase;
            font-size: 4rem;
          }

          .description {
            margin-top: 5rem;
            display: flex;
          }
          .description > * {
            flex: 1;
          }
          .description a {
            font-size: 0.9rem;
            font-weight: 600;
            display: block;
            margin-top: 2rem;
            text-decoration: underline;
          }
          .description p {
            margin: 0;
          }
          .points h3 {
            margin: 0;
          }
          .points > div {
            margin-bottom: 2rem;
          }

          .process {
            margin: 7rem 0;
          }
          .process h3 {
            color: var(--blue);
          }
          .solution {
            margin-top: 5rem;
          }

          .main-image {
            margin: 5rem 0;
            height: 40vmax;
            border: 1px solid var(--pink);
            background-postion: center center;
            background-size: cover;
          }

          .square-gallery {
            margin-top: 10rem;
            display: flex;
            flex-wrap: wrap;
          }
          .square-gallery .square-container {
            flex: 1;
            display: flex;
            justify-content: center;
          }
          .square-gallery .image {
            border: 1px solid var(--pink);
            margin: 3rem 0;
            width: 30vmax;
            height: 30vmax;
            background-size: cover;
            background-position: center center;
          }

          .video-gallery {
            position: relative;
            margin-top: 10rem;
          }

          .arrow {
            cursor: pointer;
            width: 4rem;
            z-index: 10;
            position: absolute;
          }

          .arrow.left {
            left: 0;
            top: 50%;
            transform: translate(-100%, -50%) rotate(180deg);
          }

          .arrow.right {
            right: 0;
            top: 50%;
            transform: translate(100%, -50%);
          }

          .video-gallery .video-container {
            display: flex;
            align-items: center;
            height: 100%;
            background: var(--black);
          }

          .device-container {
            display: flex !important;
            justify-content: center;
            align-items: center;
          }

          .device-container.active .marvel-device {
            zoom: 0.6;
            transform: scale(1);
            transition: all 0.5s;
          }
          .device-container .marvel-device {
            zoom: 0.6;
            transform: scale(0.8);
            transition: all 0.25s;
          }

          @media only screen and (max-width: 600px) {
            main {
              width: 85%;
              margin-top: 5rem;
            }

            .video-full {
              margin-top: 8rem;
            }
            .project-title {
              font-size: 3rem;
            }
            .description {
              margin-top: 0;
              flex-direction: column;
            }
            .square-gallery {
              margin-top: 5rem;
            }
            .square-gallery .image {
              margin: 1rem 0;
              width: 40vmax;
              height: 40vmax;
            }

            .video-gallery {
              margin-top: 5rem;
            }
            .device-container.active .marvel-device {
              zoom: 0.5;
              transform: none;
              transition: none;
            }
            .device-container .marvel-device {
              zoom: 0.5;
              transform: none;
              transition: none;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default Portfolio

export const queryPortfolio = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        thumbnail
        client
        description
        location
        work
        team
        link
        challenge
        solution
        video
        mainImages
        galleryImages
        galleryVideos
      }
    }
  }
`
