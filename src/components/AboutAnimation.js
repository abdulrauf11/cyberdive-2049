import React, { useEffect, useRef } from "react"
import lottie from "lottie-web"

const AboutAnimation = props => {
  const lottieObject = useRef(null)
  useEffect(() => {
    let lottieAnimation = lottie.loadAnimation({
      renderer: "svg",
      loop: false,
      autoplay: true,
      container: lottieObject.current,
      animationData: props.data,
    })
    let lottieTimer = setInterval(function() {
      lottieAnimation.stop()
      lottieAnimation.play()
    }, props.delay)

    return function cleanup() {
      clearInterval(lottieTimer)
      lottieAnimation.destroy()
    }
  }, [])
  return (
    <div className={`lottie-item ${props.color}`} ref={lottieObject}>
      <style jsx>
        {`
          .lottie-item {
            width: 200px;
          }
          .lottie-item.blue {
            filter: drop-shadow(0px 0px 5px var(--blue));
          }
          .lottie-item.pink {
            filter: drop-shadow(0px 0px 5px var(--pink));
          }
          @media only screen and (max-width: 600px) {
            .lottie-item {
              width: 150px;
            }
          }
          @media only screen and (min-width: 2500px) {
            .lottie-item {
              width: 250px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default AboutAnimation
