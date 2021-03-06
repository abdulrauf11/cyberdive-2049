import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const CareersImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "careers/careers.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="image-wrapper">
      <Img
        fluid={data.file.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt="about us"
      />
      <style>{`
            .image-wrapper {
                width: 100%;
                height: 100%;
            }
          }
        `}</style>
    </div>
  )
}

export default CareersImage
