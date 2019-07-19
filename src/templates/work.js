import React from "react"
import Layout from "../components/DefaultLayout.js"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Work = ({ pageContext: { allPortfolios } }) => {
  return (
    <Layout>
      <SEO title="Groovrick | Work" />
      <main>
        <div className="heading-wrapper">
          <h1>Our Work</h1>
        </div>
        <ul>
          {allPortfolios.map(p => (
            <li key={p.id}>
              <Link to={`/portfolio/${p.id}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <style jsx global>
        {``}
      </style>
    </Layout>
  )
}

export default Work
