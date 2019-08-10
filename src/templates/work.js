import React from "react"
import Layout from "../components/DefaultLayout.js"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

const Work = ({ data }) => {
  const allPortfolios = data.work.edges
  return (
    <Layout>
      <SEO title="Groovrick | Work" />
      <main>
        <div className="heading-wrapper">
          <h1>OUR WORK</h1>
        </div>
        <ul className="grid">
          {allPortfolios.map(({ node }) => (
            <li className="grid-item" key={node.frontmatter.title}>
              <Link
                to={`/portfolio${node.fields.slug}`}
                style={{
                  backgroundImage: `url(${node.frontmatter.thumbnail})`,
                }}
              >
                {node.frontmatter.title}
              </Link>
              <h3>{node.frontmatter.title}</h3>
            </li>
          ))}
        </ul>
      </main>
      <style jsx global>
        {`
          main {
            width: 70%;
            margin: 0 auto;
          }
          .heading-wrapper h1:before {
            content: "OUR WORK";
          }

          .grid {
            padding: 0;
            margin: 0 auto;
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-between;
            flex: 0 1 50%;
            flex-wrap: wrap;
          }

          .grid-item {
            margin-bottom: 8rem;
          }

          .grid-item a {
            display: block;
            border: 1px solid var(--pink);
            width: 30vmax;
            height: 35vmax;
            background-size: cover;
            background-position: center;
            color: transparent;
          }

          @media only screen and (max-width: 600px) {
            main {
              width: 85%;
            }

            .heading-wrapper h1 {
              text-align: center;
              width: 100%;
            }
            .heading-wrapper h1:before {
              width: 100%;
              text-align: center;
            }

            .grid {
              flex: 0 1 100%;
              justify-content: center;
              margin-bottom: 0rem;
            }

            .grid-item {
              margin-bottom: 6rem;
            }

            .grid-item a {
              width: 40vmax;
              height: 45vmax;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default Work

export const queryWork = graphql`
  query WorkPageQuery {
    work: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/work/" } }) {
      edges {
        node {
          fields {
            slug
          }
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
    }
  }
`
