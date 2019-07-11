import React, { useRef, useEffect } from "react"
import lottie from "lottie-web"
import innerLoaderData from "../images/inner-loader.json"
import outerLoaderData from "../images/outer-loader.json"

const Loader = () => {
  const outerLoaderObject = useRef(null)
  const innerLoaderObject = useRef(null)

  useEffect(() => {
    let innerLoaderAnimation = lottie.loadAnimation({
      renderer: "svg",
      loop: true,
      autoplay: true,
      container: innerLoaderObject.current,
      animationData: innerLoaderData,
    })
    let outerLoaderAnimation = lottie.loadAnimation({
      renderer: "svg",
      loop: true,
      autoplay: true,
      container: outerLoaderObject.current,
      animationData: outerLoaderData,
    })
    return function cleanup() {
      outerLoaderAnimation.destroy()
      innerLoaderAnimation.destroy()
    }
  })

  return (
    <main>
      <div className="loader-wrapper">
        <div className="outer-loader" ref={outerLoaderObject} />
        <div className="inner-loader" ref={innerLoaderObject} />
      </div>
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
          width: 200px;
          position: absolute;
          filter: drop-shadow(0px 0px 5px var(--pink));
        }
        .inner-loader {
          width: 180px;
          position: absolute;
          filter: drop-shadow(0px 0px 5px var(--blue));
        }
      `}</style>
    </main>
  )
}

export default Loader
