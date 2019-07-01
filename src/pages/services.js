import React, { useState, useEffect } from "react"
import Layout from "../components/DefaultLayout.js"
import Service from "../components/Service"
import ReactFullpage from "@fullpage/react-fullpage"
import Footer from "../components/Footer.js"
import Loader from "../components/Loader.js"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO"

const FullPage = ({ idata }) => {
  const serviceList = [
    {
      heading: "DIGITAL TRANSFORMATION",
      description:
        "Ignite your digital inventiveness, transform your business for the next cybernated wave 4.0 with the journey towards evolved customer experience and business agility.",
      imgSrc: idata.data.imageOne.childImageSharp.fluid,
    },
    {
      heading: "SOCIAL & ECOMMERCE",
      description:
        "Fueled with creative insights and driven by engagement, our cutting-edge social media management and e-com solutions are disruptive, fused across creativity, design, human-centered UX, high-end content & ultra-modern tech.",
      imgSrc: idata.data.imageTwo.childImageSharp.fluid,
    },
    {
      heading: "DESIGN & DEVELOPMENT",
      description:
        "We’re design-thinking driven, bringing brand, UX and technology together with innovative approaches.",
      imgSrc: idata.data.imageThree.childImageSharp.fluid,
    },
    {
      heading: "CREATIVE",
      description:
        "Catch the eye of digital-first next-gen consumers that are inspired by high-end purposeful visual content curated for maximum engagement and conversions.",
      imgSrc: idata.data.imageFour.childImageSharp.fluid,
    },
    {
      heading: "DIGITAL CONSULTANCY",
      description:
        "Consult us to make a shift from now to next by merging imagination and technology in order to grow in the age of digital transformation.",
      imgSrc: idata.data.imageFive.childImageSharp.fluid,
    },
  ]

  const opts = {
    licenseKey: "34FC5148-DB9B4EC1-86F23820-3A6C6F7A",
    scrollingSpeed: 1200,
  }

  return (
    <ReactFullpage
      {...opts}
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Service {...serviceList[0]} fullpageApi={fullpageApi} count={1} />
            <Service {...serviceList[1]} fullpageApi={fullpageApi} count={2} />
            <Service {...serviceList[2]} fullpageApi={fullpageApi} count={3} />
            <Service {...serviceList[3]} fullpageApi={fullpageApi} count={4} />
            <Service {...serviceList[4]} fullpageApi={fullpageApi} count={5} />
            <div className="section">
              <div className="contact-wrapper">
                <div className="contact-slide">
                  <h1>
                    Have a project
                    <br />
                    you'd like to discuss?
                  </h1>
                  <Link to="/connect">
                    <div className="lets-talk">Say Hello</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="section">
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

const Services = props => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    let timeout = setTimeout(() => setLoaded(true), 500)
    return function cleanup() {
      clearTimeout(timeout)
    }
  }, [])

  if (!loaded) return <Loader />

  return (
    <Layout onlyHeader={true}>
      <SEO title="Groovrick | Services" />
      <FullPage idata={props} />
      <style global jsx>{`
        .contact-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.03);
        }
        .contact-slide {
          width: 70%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact-slide h1 {
          font-size: 3.5rem;
          text-transform: uppercase;
        }
        .contact-slide a {
          color: var(--pink);
          font-weight: 400;
          font-size: 1.2rem;
          transition: all 0.5s ease-out;
        }
        .contact-slide a:hover {
          text-shadow: 0px 0px 10px var(--pink);
        }

        @media only screen and (max-width: 600px) {
          .contact-slide h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(
      relativePath: { eq: "services/digital-transformation.jpg" }
    ) {
      ...fluidImage
    }

    imageTwo: file(relativePath: { eq: "services/social-ecommerce.jpg" }) {
      ...fluidImage
    }

    imageThree: file(relativePath: { eq: "services/design-development.jpg" }) {
      ...fluidImage
    }

    imageFour: file(relativePath: { eq: "services/creative.jpg" }) {
      ...fluidImage
    }

    imageFive: file(relativePath: { eq: "services/digital-consultancy.jpg" }) {
      ...fluidImage
    }
  }
`

export default Services
