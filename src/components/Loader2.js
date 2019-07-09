import Layout from "../components/DefaultLayout.js"
import React from "react"

const Loader = () => {
  return (
    <Layout onlyHeader={true}>
      <main>
        <div className="loader-wrapper">
          <div className="outer-loader" />
          {/* <div className="inner-loader" /> */}
        </div>
      </main>
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1000;
          margin: 0;
          padding: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: var(--black);
        }

        .loader-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .outer-loader {
          border: 5px solid var(--pink);
          border-radius: 50%;
          width: 200px;
          height: 200px;
          position: absolute;
          filter: drop-shadow(0px 0px 5px var(--pink));
        }
        .inner-loader {
          width: 180px;
          position: absolute;
          filter: drop-shadow(0px 0px 5px var(--blue));
        }
      `}</style>
    </Layout>
  )
}

export default Loader
