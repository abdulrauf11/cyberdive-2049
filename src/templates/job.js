import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/DefaultLayout.js"
import { Link } from "gatsby"
import ButtonClose from "../components/ButtonClose"
import Modal from "../components/Modal"
import JobForm from "../components/JobForm"

const Job = ({ data }) => {
  const job = data.markdownRemark.frontmatter
  return (
    <Layout>
      <main>
        <Link to="/careers/">
          <div className="close-wrapper">
            <ButtonClose />
          </div>
        </Link>
        <div className="headings">
          <h1>{job.title}</h1>
          <h3>Job Description</h3>
        </div>

        {job.description && (
          <div className="description">
            <p>{job.description}</p>
          </div>
        )}

        {job.responsibilities && (
          <div className="responsibilities">
            <h3>Responsibilities</h3>
            <ul>
              {job.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        {job.requirements && (
          <div className="qualities">
            <h3>Requirements</h3>
            <ul>
              {job.requirements.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        )}

        {job.positions && (
          <div className="positions">
            <h3>Available Positions</h3>
            <ul>
              {job.positions.map((q, i) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="apply">
          <p>
            To apply for this position, click 'Apply' and fill out the form.
          </p>
        </div>
        <div className="send-wrapper">
          <Modal tag={"Apply"}>
            <JobForm defaultPosition={job.title} />
          </Modal>
        </div>
      </main>
      <style jsx global>
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
          .headings h3 {
            color: var(--pink);
            font-weight: 300;
          }

          .description {
            margin-top: 5rem;
          }

          .responsibilities {
            margin-top: 5rem;
          }
          .qualities {
            margin-top: 5rem;
          }

          .positions h3,
          .qualities h3,
          .responsibilities h3 {
            color: var(--blue);
            font-weight: 600;
            text-transform: uppercase;
          }
          ul {
            font-family: "Open Sans", sans-serif;
            font-size: 0.95rem;
          }
          li {
            margin: 0.7rem 0;
            line-height: 1.5;
          }
          ul li:before {
            margin-right: 0.2rem;
            content: "-";
          }

          .apply {
            margin-top: 5rem;
          }
          .apply p {
            color: var(--pink);
            font-weight: 600;
          }
          .send-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 7rem;
          }
          @media only screen and (max-width: 600px) {
            main {
              width: 90%;
              padding: 5rem 1rem;
            }
            .close-wrapper {
              right: 0rem;
              top: 0.5rem;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default Job

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        responsibilities
        requirements
        positions
      }
    }
  }
`
