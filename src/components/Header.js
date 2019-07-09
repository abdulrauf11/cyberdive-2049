import React from "react"
import logo from "../images/groovrick-logo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => (
  <header>
    <div className="brand-logo">
      <AniLink fade duration={0.3} to="/">
        <div>
          <img src={logo} alt="brand-logo" />
        </div>
      </AniLink>
    </div>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
      }
      .brand-logo {
        position: fixed;
        top: 2.3rem;
        left: 4rem;
        z-index: 1000;
      }
      .brand-logo img {
        display: block;
        width: 60px;
      }
      @media only screen and (max-width: 600px) {
        .brand-logo {
          top: 2.6rem;
          left: 1.7rem;
        }
        .brand-logo img {
          width: 50px;
        }
      }
    `}</style>
  </header>
)

export default Header
