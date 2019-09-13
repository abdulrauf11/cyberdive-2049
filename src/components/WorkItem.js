import React, { useRef, useEffect } from "react"
import { TimelineMax, Expo } from "gsap/all"
import { Link } from "gatsby"
if (typeof window !== "undefined") {
  var ScrollMagic = require("scrollmagic")
  require("imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap")
}

const WorkItem = props => {
  const imageRef = useRef(null)
  const timeline = new TimelineMax()
  useEffect(() => {
    timeline.to(imageRef.current, 1, { top: "-100%", ease: Expo.easeOut }, 0)
    let controller = new ScrollMagic.Controller()
    let scene = new ScrollMagic.Scene({
      triggerElement: imageRef.current,
      reverse: false,
    })
    scene.setTween(timeline).addTo(controller)
  }, [])

  return (
    <>
      <Link
        className="grid-item-link"
        to={`/portfolio${props.slug}`}
        style={{
          backgroundImage: `url(${props.thumbnail})`,
        }}
      >
        <div className="image-overlay" ref={imageRef} />
      </Link>
      <style global jsx>{`
        .grid-item-link {
          overflow: hidden;
          position: relative;
          display: block;
          width: 30vmax;
          height: 35vmax;
          background-size: cover;
          background-position: center;
          color: transparent;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--black);
        }

        @media only screen and (max-width: 600px) {
          .grid-item-link {
            width: 100%;
            height: 60vh;
          }
        }
      `}</style>
    </>
  )
}

export default WorkItem
