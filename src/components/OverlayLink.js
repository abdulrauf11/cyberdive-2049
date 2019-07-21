import React from "react"
import { Link } from "gatsby"

const OverlayLink = props => (
  <div>
    <Link to={props.url}>
      <div className={"link-wrapper"}>
        <div>{props.pageType}</div>
      </div>
    </Link>
    <style jsx>{`
      .link-wrapper {
        position: relative;
      }
      .link-wrapper div {
        opacity: 1;
        cursor: pointer;
        font-weight: 700;
        font-size: 2.5rem;
        margin: 1rem 0 1rem 2rem;
        transition: color 0.25s ease-in-out, transform 0.3s ease-in-out;
      }
      .link-wrapper div:hover {
        color: var(--blue);
        transform: translateX(10px);
      }
      @media only screen and (max-width: 600px) {
        .link-wrapper div {
          margin: 1rem 0;
          font-size: 2rem;
        }
      }
    `}</style>
  </div>
)

export default OverlayLink