import React from "react"
import Layout from "../components/DefaultLayout.js"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ButtonClose from "../components/ButtonClose"

const Portfolio = ({ data }) => {
  const portfolio = data.markdownRemark.frontmatter
  return (
    <Layout>
      <main>
        <Link to="/work/">
          <div className="close-wrapper">
            <ButtonClose />
          </div>
        </Link>
        <div className="headings">
          <h1>{portfolio.title}</h1>
        </div>
      </main>
      <style jsx>
        {`
          main {
            min-height: 100vh;
            width: 75%;
            margin: 10rem auto;
            background: rgba(255, 255, 255, 0.03);
            padding: 5rem 4rem;
            position: relative;
          }

          .close-wrapper {
            position: absolute;
            right: 1rem;
            top: 1rem;
          }

          .headings {
            text-align: center;
          }
          .headings h1 {
            margin-top: 0;
            color: var(--blue);
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
      }
    }
  }
`
