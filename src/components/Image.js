import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { useStaticQuery, graphql } from "gatsby"

export default function Image({ src }) {
  const idata = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/jpeg|jpg|png|gif/" }
          absolutePath: { regex: "/static/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const file = idata.allFile.edges.find(
    image => `/${image.node.relativePath}` === src
  )
  if (!file) {
    return (
      <img
        src={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
        alt="portfolio"
      />
    )
  }
  return (
    <Img
      fluid={file.node.childImageSharp.fluid}
      objectFit="cover"
      objectPosition="50% 50%"
    />
  )
}
