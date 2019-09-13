import React from "react"
import { Link } from "gatsby"

function ContactSlide() {
  return (
    <div className="contact-wrapper">
      <div className="contact-slide">
        <h1>
          Have a project
          <br />
          you'd like to discuss?
        </h1>
        <Link to="/connect">
          <div className="lets-talk">Say Hello</div>
        </Link>
      </div>
      <style>
        {`
        .contact-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            background: rgba(255, 255, 255, 0.03);
        }
        .contact-slide {
            width: 70%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .contact-slide h1 {
            font-size: 3.5rem;
            text-transform: uppercase;
        }
        .contact-slide a {
            color: var(--pink);
            font-weight: 400;
            font-size: 1.2rem;
            transition: all 0.5s ease-out;
        }
        .contact-slide a:hover {
            text-shadow: 0px 0px 10px var(--pink);
        }
        @media only screen and (max-width: 600px) {
            .contact-slide h1 {
                font-size: 2rem;
            }
            .contact-slide {
                width: 85%;
            }
        }
    `}
      </style>
    </div>
  )
}

export default ContactSlide
