import React from "react"
import Layout from "../../components/DefaultLayout"
import SEO from "../../components/SEO"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Service = ({ data }) => {
  const settings = {
    centerMode: true,
    centerPadding: "5%",
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
        },
      },
    ],
  }

  const serviceObject = {
    name: "Creative",
    introduction: ``,
    process: [
      {
        title: "Dedication",
        text: `Do not be satisfied until you have achieved more than you set out to. Be urgent in your actions – every day is an opportunity to do more than you thought you could.`,
      },
      {
        title: "Learning",
        text: `Relentlessly pursue personal growth and learn from the experience of others. The challenges we face have been experienced by many people before us – find their solutions.`,
      },
      {
        title: "Integrity",
        text: `Operate with transparency, honesty and humility. Build trust by proving yourself to our customers at every opportunity that arises.`,
      },
      {
        title: "Teamwork",
        text: `Communicate with those around you and support each other to realize your goals. Listen to others – there is no such thing as bad idea.`,
      },
      {
        title: "Accountability",
        text: `Lead by example and demand a higher standard of yourself than those around you. Own the challenges in front of you and don’t allow space for blame or excuses.`,
      },
      {
        title: "Customer Devotion",
        text: `We are here because of our customers. Strive to go beyond expectations with every interaction that you have.`,
      },
    ],
  }
  return (
    <Layout>
      <SEO title={`Groovrick | Creative`} />
      <main>
        <section className="service-description">
          <h1 className="service-heading">{serviceObject.name}</h1>
          <p className="service-introduction">{serviceObject.introduction}</p>
        </section>

        <section className="banner-image">
          <Img
            fluid={data.image.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </section>

        <section className="process">
          <div className="heading-big">
            <h1>Values</h1>
          </div>

          <div className="process-list">
            <Slider {...settings}>
              {serviceObject.process.map((p, index) => (
                <div className="process-item-wrapper" key={index}>
                  <div className="process-item">
                    <div className="index">{index + 1}</div>
                    <div className="title">{p.title}</div>
                    <p className="text">{p.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </main>
      <style global jsx>{`
        main {
          padding: 10rem 0 0 0;
        }
        .service-description {
          width: 70%;
          margin: 0 auto;
        }
        .service-heading {
          text-transform: uppercase;
          text-align: center;
          font-size: 3rem;
        }

        .process {
          margin: 5rem 0;
          min-height: 100vh;
          position: relative;
          display: flex;
        }

        .process-list {
          align-self: center;
          width: 80%;
          margin-left: auto;
        }

        .process-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100vh;
          position: relative;
          width: 50%;
        }

        .process-item .index {
          right: -5rem;
          z-index: -1;
          position: absolute;
          font-size: 30rem;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px var(--blue);
        }

        .process-item .title {
          text-transform: uppercase;
          font-size: 2.5rem;
          font-weight: 700;
        }

        .heading-big {
          text-align: center;
          width: 100vh;
          transform: rotate(-90deg) translateX(-100%) translateY(-20%);
          transform-origin: 0 0;
          position: absolute;
        }

        .heading-big h1 {
          margin: 0;
          font-size: 9.5rem;
          color: transparent;
          -webkit-text-stroke: 1px var(--pink);
          text-shadow: 0px 0px 4.5px var(--black), 0 0 4.5px var(--pink);
        }

        .banner-image {
          width: 100%;
          height: 90vh;
          margin: 4rem 0;
          border-top: 1px solid var(--pink);
          border-bottom: 1px solid var(--pink);
        }

        .banner-image > div {
          width: 100%;
          height: 100%;
        }

        @media only screen and (max-width: 600px) {
          main {
            padding: 8rem 0 0 0;
          }
          .service-description {
            width: 85%;
          }

          .service-heading {
            text-align: left;
            font-size: 1.5rem;
          }

          .heading-big {
            display: block;
            width: 100%;
            transform: rotate(0) translate(0);
            transform-origin: 50% 50%;
            position: static;
            text-align: center;
          }

          .heading-big h1 {
            margin: 0;
            font-size: 3rem;
            color: transparent;
            -webkit-text-stroke: 1px var(--pink);
            text-shadow: 0px 0px 4.5px var(--black), 0 0 4.5px var(--pink);
          }

          .process {
            display: block;
            min-height: auto;
          }

          .process-list {
            width: 100%;
            margin-left: 0;
            margin: 5rem 0;
          }

          .process-item {
            display: block;
            height: auto;
            position: relative;
            margin: 0 auto;
            width: 85%;
          }

          .process-item .index {
            top: 0;
            right: 0;
            font-size: 10rem;
          }

          .process-item .title {
            font-size: 1.5rem;
          }

          .banner-image {
            height: 40vh;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Service

export const fluidImageC = graphql`
  fragment fluidImageD on File {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "services/creative-banner.png" }) {
      ...fluidImage
    }
  }
`
