import React, { useEffect, useRef } from "react"
import logo from "../images/logo.png"
import logoSmall from "../images/favicon.png"
import { Link } from "gatsby"
import { TimelineMax } from "gsap"

const Header = ({ animate }) => {
  const logoRef = useRef(null)

  useEffect(() => {
    const timeline = new TimelineMax()
    if (animate) {
      timeline
        .to(logoRef.current.children[0], 0.5, {
          opacity: 0,
        })
        .to(logoRef.current.children[1], 0.5, {
          opacity: 1,
        })
    } else {
      timeline
        .to(logoRef.current.children[1], 0.5, {
          opacity: 0,
        })
        .to(logoRef.current.children[0], 0.5, {
          opacity: 1,
        })
    }
  }, [animate])

  return (
    <header>
      <div className="brand-logo">
        <Link to="/">
          <div className="logo-wrapper" ref={logoRef}>
            <img src={logo} alt="brand-logo" className="logo-large" />
            <img src={logoSmall} alt="brand-logo" className="logo-small" />
          </div>
        </Link>
      </div>
      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }
        .brand-logo {
          position: fixed;
          top: 2.3rem;
          left: 4rem;
          z-index: 1000;
        }
        .logo-wrapper {
          position: relative;
        }
        .logo-large {
          opacity: 1;
          width: 130px;
        }
        .logo-small {
          left: 0;
          top: 0;
          position: absolute;
          opacity: 0;
          width: 50px;
        }

        @media only screen and (max-width: 600px) {
          .brand-logo {
            top: 2.6rem;
            left: 1.7rem;
          }

          .brand-logo img {
            display: block;
            width: 120px;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
