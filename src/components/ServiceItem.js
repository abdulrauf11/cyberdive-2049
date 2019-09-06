import React, { useRef, useEffect } from "react"
import { TimelineMax, Expo } from "gsap/all"
import Img from "gatsby-image"
import { Link } from "gatsby"
if (typeof window !== "undefined") {
  var ScrollMagic = require("scrollmagic")
  require("imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap")
}

function pad(n, width, z) {
  z = z || "0"
  n = n + ""
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

const ServiceItem = props => {
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const countRef = useRef(null)
  const timeline = new TimelineMax()
  useEffect(() => {
    timeline
      .to(textRef.current, 1, { opacity: 1, y: 0 }, 0.3)
      .to(imageRef.current, 3, { left: "100%", ease: Expo.easeOut }, 0)
      .to(countRef.current, 3, { opacity: 1, ease: Expo.easeOut }, 0.5)
    let controller = new ScrollMagic.Controller()
    let scene = new ScrollMagic.Scene({
      triggerElement: imageRef.current,
      reverse: true,
    })
    scene.setTween(timeline).addTo(controller)
  }, [])

  return (
    <div className="section">
      <div className="service-item">
        <div className="item-image">
          <div className="image-overlay" ref={imageRef} />
          <Img
            fluid={props.imgSrc}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
        <div className="item-content" ref={textRef}>
          <h1>{props.heading}</h1>
          <p>{props.description}</p>
          <div className="button-wrapper">
            <Link
              style={{
                padding: "0.7rem 1rem",
                border: "1px solid var(--pink)",
                fontSize: "0.8rem",
              }}
              to={props.link}
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="count" ref={countRef}>
          {pad(props.count, 2)}/05
        </div>
      </div>
      <style jsx>{`
        .service-item {
          position: relative;
          width: 70%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .count {
          position: absolute;
          right: 0;
          bottom: 0;
          font-weight: 600;
          font-size: 0.8rem;
          opacity: 0;
          color: var(--blue);
        }
        .item-image {
          overflow: hidden;
          flex: 1;
          position: relative;
          margin-right: 1rem;
        }

        .image-overlay {
          z-index: 10;
          position: absolute;
          top: 0;
          left: 0;
          content: "";
          width: 100%;
          height: 100%;
          background: var(--black);
        }
        .item-content {
          flex: 1;
          opacity: 0;
          transform: translateY(15px);
          margin-left: 1rem;
        }
        .item-content h1 {
          font-weight: 700;
          font-size: 2.5rem;
          margin: 0;
          width: 80%;
        }
        .item-content p {
          margin: 3rem 0;
        }
        .item-content a {
          display: inline-block;
          font-family: "Open Sans", sans-serif;
          font-weight: 300;
          font-size: 0.7rem;
          border: 1px solid var(--pink);
          padding: 0.5rem 1rem;
        }

        .fadeLeft {
          animation-name: fade-left-animation;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation-fill-mode: both;
          animation-iteration-count: 1;
          opacity: 1;
        }
        .zoomOut {
          animation-name: zoom-out-animation;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation-fill-mode: both;
          animation-iteration-count: 1;
        }

        @keyframes fade-left-animation {
          0% {
            opacity: 0;
            transform: translate3d(0px, 15%, 0px);
          }
          100% {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes zoom-out-animation {
          0% {
            transform: scale(0.9);
          }
          10% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        @media only screen and (max-width: 600px) {
          .service-item {
            flex-direction: column;
            width: 90%;
          }
          .item-image {
            width: 60%;
            margin-right: 0rem;
          }
          .item-content {
            margin-left: 0rem;
          }
          .item-content h1 {
            width: 100%;
            margin-top: 2rem;
            font-size: 1.5rem;
          }
          .item-content p {
            line-height: 1.6;
            font-size: 0.9rem;
            margin: 1rem 0;
          }
          .service-item .button-wrapper {
            margin: 2rem 0;
          }
        }
      `}</style>
    </div>
  )
}

export default ServiceItem
