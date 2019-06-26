import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <div className="flex-wrapper">
      <div className="primary-subwrapper">
        <div className="wrapper-left">
          <div className="left-subwrapper">
            <Link to="/connect">
              <div className="lets-talk">LET'S TALK.</div>
            </Link>
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
        </div>
        <div className="wrapper-right">
          <div className="right-subwrapper">
            <h3>GET IN TOUCH</h3>
            <a href="mailto:hello@groovrick.com">hello@groovrick.com</a>
            <h3>VISIT US</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/iGHgpzfEvinWk9kk6"
            >
              Bahria Town, Lahore
              <br />
              Pakistan
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <span>
        <Link to="/privacy-policy">
          <span style={{ marginRight: "0.3rem" }} className="footer-link">
            Privacy Policy
          </span>
        </Link>
        |
        <Link to="/terms-and-conditions">
          <span style={{ marginLeft: "0.3rem" }} className="footer-link">
            Terms & Conditions
          </span>
        </Link>
      </span>
      <span>&copy; Copyright Groovrick 2019. All Rights Reserved.</span>
      <span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.rauftech.com"
          className="powered-by"
        >
          Powered by:{"  "}
          <span>Rauf Tech</span>
        </a>
      </span>
    </div>
    <style jsx>
      {`
        a,
        .lets-talk,
        .footer-link {
          transition: all 0.5s ease-out;
        }
        a:hover,
        .lets-talk:hover,
        .footer-link:hover {
          text-shadow: 0px 0px 10px var(--white);
        }
        .powered-by:hover {
          text-shadow: 0px 0px 0px var(--white);
        }
        .powered-by span {
          color: var(--pink);
          transition: all 0.5s ease-out;
        }
        .powered-by:hover span {
          text-shadow: 0px 0px 10px var(--pink);
        }

        .flex-wrapper {
          display: flex;
          height: 93vh;
          align-items: center;
        }
        .primary-subwrapper {
          display: flex;
          width: 65%;
          margin: auto;
        }
        .wrapper-left {
          flex: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .wrapper-right {
          flex: 1;
          font-size: 0.9rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .wrapper-right h3:nth-child(1) {
          margin-top: 0;
        }
        .wrapper-right h3 {
          font-weight: 600;
          margin-top: 6rem;
        }
        .wrapper-right a {
          line-height: 1.5;
        }
        .copyright {
          text-align: center;
        }
        .lets-talk {
          font-weight: 700;
          margin: 0;
          font-size: 4rem;
        }
        .social-links {
          margin-top: 2rem;
          text-align: right;
          font-size: 0.8rem;
        }
        .social-links a {
          margin-left: 2rem;
        }
        .copyright {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0;
          font-size: 0.7rem;
          height: 7vh;
          width: 65%;
          margin: auto;
        }
        .copyright span {
          flex: 1;
        }
        .copyright span:nth-child(1) {
          flex: 1;
          text-align: left;
        }
        .copyright span:nth-child(3) {
          flex: 1;
          text-align: right;
        }

        @media only screen and (max-width: 600px) {
          .flex-wrapper {
            height: 85vh;
          }
          .primary-subwrapper {
            flex-direction: column;
            padding: 2rem;
            width: 100%;
          }
          .wrapper-left {
            align-items: flex-start;
          }
          .wrapper-right {
            margin-top: 3rem;
          }
          .wrapper-right h3 {
            margin-bottom: 0.5rem;
            margin-top: 2rem;
          }
          .right-subwrapper {
            width: 100%;
          }
          .lets-talk {
            font-size: 2.5rem;
          }
          .social-links {
            margin-top: 1rem;
          }
          .social-links a {
            margin-left: 0;
            margin-right: 2rem;
          }
          .copyright {
            height: 15vh;
            width: 100%;
            flex-direction: column;
          }
        }
      `}
    </style>
  </footer>
)

export default Footer
