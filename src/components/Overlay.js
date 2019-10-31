import React from "react"
import OverlayLink from "./OverlayLink"

class Overlay extends React.Component {
  render() {
    return (
      <div className={this.props.isActive ? "overlay is-active" : "overlay"}>
        <div className="primary-wrapper">
          <div className="wrapper">
            <div className="rotated-text">
              <p>MENU</p>
            </div>
            <div className="page-links">
              <OverlayLink url="/services/" pageType="SERVICES" />
              <OverlayLink url="/about/" pageType="ABOUT" />
              <OverlayLink url="/media-and-news/" pageType="MEDIA & NEWS" />
              <OverlayLink url="/careers/" pageType="CAREERS" />
              <OverlayLink url="/connect/" pageType="CONNECT" />
            </div>
          </div>
          <div className="social-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/groovrick"
            >
              Instagram.
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/groovrick/"
            >
              Facebook.
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/groovrick/"
            >
              LinkedIn.
            </a>
          </div>
        </div>
        <style jsx>{`
          a {
            transition: all 0.5s ease-out;
          }
          a:hover {
            text-shadow: 0px 0px 10px var(--white);
          }
          .overlay {
            width: 100%;
            height: 100%;
            top: 0;
            position: fixed;
            left: 100%;
            z-index: 900;
            background: var(--black);
            transition: all 0.5s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .overlay.is-active {
            left: 0;
          }
          .primary-wrapper {
            flex: 0 1 70%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .wrapper {
            display: flex;
            flex: 1;
            justify-content: center;
          }
          .rotated-text {
            position: relative;
            min-height: 100%;
            width: 100px;
            margin-top: 1rem;
          }
          .rotated-text p {
            color: var(--pink);
            font-size: 0.9rem;
            font-weight: 400;
            margin: 0;
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: 100%;
            transform: rotate(270deg);
          }
          .social-links {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
          }
          .social-links a {
            font-size: 0.9rem;
            margin: 1rem 0;
            display: block;
          }
          @media only screen and (max-width: 600px) {
            .primary-wrapper {
              flex-direction: column;
              align-items: flex-start;
              padding: 2rem;
              flex: 1;
            }
            .wrapper {
              flex: 0;
              flex-direction: column;
            }
            .rotated-text {
              margin-top: 0;
              min-height: auto;
              width: auto;
            }
            .rotated-text p {
              position: static;
              transform-origin: 100%;
              transform: rotate(0);
              font-size: 0.7rem;
            }
            .social-links {
              flex: 0;
              align-items: flex-start;
              flex-direction: row;
            }
            .social-links a {
              font-size: 0.8rem;
              margin-right: 1rem;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Overlay
