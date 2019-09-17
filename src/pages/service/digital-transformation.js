import React from "react"
import Layout from "../../components/DefaultLayout"
import SEO from "../../components/SEO"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Service = ({ data }) => {
  console.log(data)
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
    name: "Digital Transformation",
    introduction: `Evolving your enterprise creates a better way to grow, helping you better serve your customers, employees and investors, and increasing the odds that your firm – not a digital native – will be the disruptor in your industry in the age of 4th digital-first industrial revolution.`,
    offerings: [
      "Customer Experience (CX) - Define experiences customers love backed by fusing ultra-modern technologies and imaginative design thinking.",
      "Business Agility - Engage employees with a higher organizational purpose, and empower them with an operating model that helps the company compete at the pace of digital.",
    ],
    process: [
      {
        title: "Digital Maturity Assessment",
        text: `Assessment of current state and implemented business models.<br /><br />Re-imagining digital-first business models and vision.<br /><br />Identifying systematic gaps and blue-printing transformation initiatives along four tracks of people & culture, process, technology and content`,
      },
      {
        title: "Defining Transformational Roadmaps",
        text: `Developing transformational frame-work and strategies for target state.<br /><br />Road-mapping customer experience journeys. Road-mapping employees enablement journeys.<br /><br />Initiative prioritization and exploring returns on investments
        `,
      },
      {
        title: "Execution & Monitoring",
        text: `Build a cross-functional digital team.<br /><br />Implement business change and technology.<br /><br />Improve customer engagement.<br /><br />Enhance the employee experience.<br /><br />Monitor change adoption.<br /><br />Ensure continuous improvement and innovation
        `,
      },
    ],
  }
  return (
    <Layout>
      <SEO title={`Groovrick | Digital Transformation`} />
      <main>
        <section className="service-description">
          <h1 className="service-heading">{serviceObject.name}</h1>
          <p className="service-introduction">{serviceObject.introduction}</p>

          <section className="offerings">
            <h3>Offerings</h3>
            <div>
              {serviceObject.offerings.map((p, index) => (
                <p className="offering" key={index}>
                  {p}
                </p>
              ))}
            </div>
          </section>
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
            <h1>PROCESS</h1>
          </div>

          <div className="process-list">
            <Slider {...settings}>
              {serviceObject.process.map((p, index) => (
                <div className="process-item-wrapper" key={index}>
                  <div className="process-item">
                    <div className="index">{index + 1}</div>
                    <div className="title">{p.title}</div>
                    <p
                      className="text"
                      dangerouslySetInnerHTML={{ __html: p.text }}
                    ></p>
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

        .offerings {
          margin: 2rem 0;
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
          height: 120vh;
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

        .process-item .text {
          line-height: 1.4;
        }

        .heading-big {
          text-align: center;
          width: 120vh;
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

export const fluidImageDT = graphql`
  fragment fluidImageDT on File {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image: file(
      relativePath: { eq: "services/digital-transformation-banner.png" }
    ) {
      ...fluidImageDT
    }
  }
`
