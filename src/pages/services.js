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
