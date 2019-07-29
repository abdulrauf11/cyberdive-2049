import React from "react"
import Layout from "../components/DefaultLayout.js"
import { graphql } from "gatsby"

const Portfolio = ({ data }) => {
  const portfolio = data.markdownRemark.frontmatter
  return (
    <Layout>
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
      </main>
      <style jsx>
        {`
          main {
            width: 70%;
            margin: 10rem auto;
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

          @media only screen and (max-width: 600px) {
            main {
              width: 85%;
            }
            .description {
              flex-direction: column;
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
      }
    }
  }
`
