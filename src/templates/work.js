import React, { useState, useRef } from "react"
import Layout from "../components/DefaultLayout.js"
import SEO from "../components/SEO"
import WorkItem from "../components/WorkItem"

const Work = ({ pageContext: { allPortfolios } }) => {
  const container = useRef()
  const [filterList, setFilterList] = useState({
    All: true,
    Design: false,
    Development: false,
    Social: false,
    Creative: false,
    Ecommerce: false,
  })
  function handleClick(e) {
    const prev = container.current.querySelector(".active").innerText
    const curr = e.currentTarget.innerText
    setFilterList({ ...filterList, [curr]: true, [prev]: false })
  }

  return (
    <Layout>
      <SEO title="Groovrick | Work" />
      <main>
        <div className="heading-big">
          <h1>WORK</h1>
        </div>

        <ul className="grid">
          <li className="filter">
            <h2 className="filter-type">Case Studies</h2>
            <div className="filter-list" ref={container}>
              {Object.keys(filterList).map(key => (
                <span
                  key={key}
                  className={filterList[key] ? "active" : "in-active"}
                  onClick={handleClick}
                >
                  {key}
                </span>
              ))}
            </div>
          </li>
          {allPortfolios.map(
            ({ node }) =>
              node.frontmatter.title !== "DEFAUL" && (
                <li className="grid-item" key={node.frontmatter.title}>
                  <WorkItem
                    slug={node.fields.slug}
                    thumbnail={node.frontmatter.thumbnail}
                  />
                  <h3>{node.frontmatter.title}</h3>
                </li>
              )
          )}
        </ul>
      </main>
      <style jsx global>
        {`
          main {
            position: relative;
          }
          .heading-big {
            transform: rotate(-90deg) translateX(-105%) translateY(-20%);
            transform-origin: 0 0;
            position: absolute;
          }

          .heading-big h1 {
            margin: 0;
            font-size: 10rem;
            color: transparent;
            -webkit-text-stroke: 1px var(--pink);
            text-shadow: 0px 0px 4.5px var(--black), 0 0 4.5px var(--pink);
          }

          .grid {
            width: 70%;
            padding: 0;
            margin: 5rem auto 8rem auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          .grid-item {
            margin: 1rem 0 4rem 0;
          }

          .filter {
            flex: 1 1 100%;
            margin: 2rem 0 6rem 0;
          }

          .filter-type {
            font-size: 2rem;
            margin: 0;
          }

          .filter-list {
            margin: 0;
            margin-top: 2rem;
          }

          .filter-list input {
            color: var(--white);
          }
          .filter-list span {
            cursor: pointer;
            font-size: 0.8rem;
            margin-right: 4rem;
          }

          .filter-list span.active {
            color: var(--pink);
            text-shadow: 0 0 5px var(--pink);
          }

          @media only screen and (max-width: 600px) {
            main {
              width: 85%;
              margin: 8rem auto 4rem auto;
            }

            .grid {
              justify-content: center;
              width: 100%;
              margin: 0;
            }

            .grid-item {
              margin: 2rem 0;
            }

            .heading-big {
              transform: rotate(0) translate(0);
              transform-origin: 50% 50%;
              position: static;
              text-align: center;
            }

            .heading-big h1 {
              margin: 0;
              font-size: 5rem;
              color: transparent;
              -webkit-text-stroke: 1px var(--pink);
              text-shadow: 0px 0px 4.5px var(--black), 0 0 4.5px var(--pink);
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default Work
