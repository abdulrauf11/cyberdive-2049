import React, { useState, useEffect } from "react"
import Layout from "../components/DefaultLayout.js"
import Loader from "../components/Loader.js"
import SEO from "../components/SEO"
import FullPage from "../components/FullPage.js"
import { graphql } from "gatsby"

const Services = props => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    let timeout = setTimeout(() => setLoaded(true), 600)
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
