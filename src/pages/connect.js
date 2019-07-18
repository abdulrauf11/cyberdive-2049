import React, { useRef, useEffect } from "react"
import Layout from "../components/DefaultLayout.js"
import ContactForm from "../components/ContactForm.js"
import { TimelineMax, Circ, Bounce, Sine, RoughEase, Power4 } from "gsap/all"
import message from "../images/contact/message.svg"
import pin from "../images/contact/map.svg"
import SEO from "../components/SEO"

const Connect = () => {
  const map = useRef(null)
  const envelope = useRef(null)
  useEffect(() => {
    const jumpTimeline = new TimelineMax({ repeat: -1 })
    const flickerTimeline = new TimelineMax()

    jumpTimeline
      .to(map.current, 0.3, {
        scaleY: 0.9,
        transformOrigin: "50% 100%",
        delay: 2,
        ease: Circ.easeOut,
      })
      .to(map.current, 0.5, {
        scaleY: 1,
        scaleX: 0.9,
        y: -100,
        ease: Circ.easeOut,
      })
      .to(map.current, 1, { y: 0, scaleY: 1, scaleX: 1, ease: Bounce.easeOut })

    let fromVars = {
      rotation: "-5",
    }
    let toVars = {
      rotation: "5",
      transformOrigin: "center top",
      ease: Sine.easeInOut,
      repeat: -1,
      yoyo: true,
    }
    flickerTimeline.fromTo(envelope.current, 2, fromVars, toVars).from(
      envelope.current,
      1,
      {
        opacity: 0.2,
        repeat: -1,
        repeatDelay: 5,
        ease: RoughEase.ease.config({
          template: Power4.easeInOut,
          strength: 3,
          points: 50,
          taper: "none",
          randomize: true,
          clamp: false,
        }),
      },
      "-=2"
    )
  }, [])

  return (
    <Layout>
      <SEO title="Groovrick | Connect" />
      <main className="connect-main">
        <section className="get-in-touch">
          <div className="image">
            <img src={message} alt="contact" ref={envelope} />
          </div>
          <div className="text">
            <div className="heading-wrapper">
              <h1>GET IN</h1>
              <h1>TOUCH</h1>
            </div>
          </div>
        </section>

        <section className="form-wrapper">
          <div className="empty" />
          <div className="form">
            <span>Write to us and we will get back to you.</span>
            <ContactForm />
          </div>
        </section>

        <section className="contact-wrapper">
          <div className="contact">
            <div className="say">
              <h2>Say</h2>
              <a href="mailto:hello@groovrick.com">hello@groovrick.com</a>
            </div>
            <div className="our-office">
              <h2>Our Office</h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/iGHgpzfEvinWk9kk6"
              >
                Bahria Town, Lahore
                <br />
                Pakistan
              </a>
              <a className="phone" href="tel:+921111111111">
                Tel: +92 (42) 35249624
              </a>
            </div>
            <div className="follow-us">
              <h2>Follow Us</h2>
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
          <div className="image">
            <img src={pin} alt="map" ref={map} />
          </div>
        </section>
      </main>
      <style jsx>{`
        a {
          transition: all 0.5s ease-out;
        }
        a:hover {
          text-shadow: 0px 0px 10px var(--white);
        }
        .connect-main {
          margin-top: 10rem;
          margin-bottom: 5rem;
        }
        section {
          width: 60%;
          margin: 0 auto 2rem auto;
        }
        .get-in-touch {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .get-in-touch .image {
          flex: 1;
        }
        .get-in-touch .image img {
          display: block;
          width: 300px;
        }
        .get-in-touch .text {
          flex: 1;
        }

        .heading-wrapper {
          align-items: flex-start;
          flex-direction: column;
          width: 90%;
          color: var(--blue);
          line-height: 1.4;
          margin: 0;
        }
        .heading-wrapper h1 {
          margin: 0;
        }
        .heading-wrapper h1:nth-child(2) {
          width: 100%;
          text-align: right;
        }
        .heading-wrapper h1:before {
          content: "GET IN";
        }
        .heading-wrapper h1:nth-child(2):before {
          content: "TOUCH";
          width: 100%;
          text-align: right;
        }

        .contact-wrapper {
          display: flex;
        }
        .contact {
          flex: 1;
        }
        .contact h2 {
          text-transform: uppercase;
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
        }
        .our-office {
          margin-top: 5rem;
        }
        .our-office a {
          display: block;
          line-height: 1.5;
        }
        .our-office .phone {
          margin-top: 1.5rem;
        }
        .follow-us {
          margin-top: 5rem;
        }
        .social-links a {
          margin-right: 2rem;
        }
        .contact-wrapper {
          margin-top: 10rem;
        }
        .contact-wrapper .image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .contact-wrapper .image img {
          width: 150px;
        }

        .form-wrapper {
          display: flex;
        }
        .form-wrapper .empty {
          flex: 1;
        }
        .form-wrapper .form {
          flex: 1;
        }

        @media only screen and (max-width: 600px) {
          section {
            width: 85%;
          }
          .connect-main {
            margin-bottom: 2rem;
          }
          .get-in-touch {
            flex-direction: column;
          }
          .heading-wrapper {
            width: 100%;
          }
          .get-in-touch .image {
            margin-top: 0;
            margin-bottom: 2rem;
          }
          .get-in-touch .image img {
            width: 200px;
          }

          .form-wrapper .empty {
            display: none;
          }
          .form-wrapper .form {
            flex: 1;
          }

          .contact-wrapper .image {
            position: relative;
          }
          .contact-wrapper .image img {
            width: 80px;
            position: absolute;
            left: -120px;
          }

          .contact a {
            font-size: 0.9rem;
          }

          .connect-image {
            margin-top: 4rem;
            width: 80%;
            height: 350px;
            position: static;
            order: 2;
          }
          .box-wrapper {
            width: 80%;
            height: 350px;
            left: 10%;
            top: calc(105% - 350px);
          }
          .image-overlay {
            width: 80%;
            height: 350px;
            left: 0%;
            top: calc(100% - 350px);
            background: var(--black);
          }

          .full-width {
            display: flex;
            flex-direction: column;
          }
        }
        @media only screen and (min-width: 2500px) {
          .get-in-touch .image img {
            width: 500px;
          }
          .heading-wrapper {
            width: 55%;
          }
          .contact-wrapper .image img {
            width: 250px;
          }
          .connect-main {
            margin-bottom: 5rem;
          }
          .full-width {
            margin: 12rem 0 15rem 0;
          }
          .connect-image {
            height: 100%;
          }
          .box-wrapper {
            height: 100%;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Connect
