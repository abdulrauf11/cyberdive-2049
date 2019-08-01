import React from "react"
import Layout from "../components/DefaultLayout.js"
import { graphql } from "gatsby"
import { Player, ControlBar, BigPlayButton } from "video-react"

const Portfolio = ({ data }) => {
  const portfolio = data.markdownRemark.frontmatter
  return (
    <Layout>
      <section className="video">
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
            <a target="_blank" rel="noopener noreferrer" href={portfolio.link}>
              LAUNCH PROJECT
            </a>
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

        <section
          className="main-image"
          style={{ backgroundImage: `url(${portfolio.mainImage})` }}
        >
          {/* <img src={portfolio.mainImage} alt="portfolio-main" /> */}
        </section>

        <section className="square-gallery">
          {portfolio.galleryImages.map((i, index) => (
            <div className="square-container" key={index}>
              <div className="image" style={{ backgroundImage: `url(${i})` }} />
            </div>
          ))}
        </section>

        <section className="video-gallery">
          {portfolio.galleryVideos.map((i, index) => (
            <div className="video-container" key={index}>
              <div className="video">
                <Player
                  fluid={true}
                  playsInline={true}
                  aspectRatio="9:16"
                  src={i}
                >
                  <BigPlayButton position="center" />
                </Player>
              </div>
            </div>
          ))}
        </section>
      </main>
      <style jsx>
        {`
          main {
            width: 70%;
            margin: 10rem auto;
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
            margin-top: 10rem;
            display: flex;
            flex-wrap: wrap;
          }
          .video-gallery .video-container {
            flex: 1;
            display: flex;
            justify-content: center;
          }
          .video-gallery .video {
            margin: 3rem 0;
            border: 1px solid var(--pink);
            width: 25vmax;
            height: 44.44vmax;
          }

          @media only screen and (max-width: 600px) {
            main {
              width: 85%;
              margin-top: 5rem;
            }

            .video {
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

            .video-gallery .video {
              margin: 1rem 0;
              width: 40vmax;
              height: 71.11vmax;
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
        mainImage
        galleryImages
        galleryVideos
      }
    }
  }
`
