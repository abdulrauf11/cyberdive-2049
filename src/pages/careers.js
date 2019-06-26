import React, { useRef, useEffect } from "react"
import Layout from "../components/DefaultLayout"
import { Link } from "gatsby"
import all_jobs from "../models/jobs.json"
import Modal from "../components/Modal"
// import JobForm from "../components/JobForm"
// import JobForm2 from "../components/JobForm2"
import JobForm3 from "../components/JobForm3"
import { TimelineMax, Expo } from "gsap"
import careersImage from "../images/careers/careers.jpg"
if (typeof window !== "undefined") {
  var ScrollMagic = require("scrollmagic")
  require("imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap")
}

function pad(n, width, z) {
  z = z || "0"
  n = n + ""
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

const Careers = () => {
  const imageRef = useRef(null)
  const boxSides = []
  const timeline = new TimelineMax()

  useEffect(() => {
    timeline
      .to(imageRef.current, 2, { right: "100%", ease: Expo.easeOut }, 0)
      .to(boxSides[0], 0.5, { width: "100%" }, 2)
      .to(boxSides[1], 0.5, { height: "100%" }, 0.5)
      .to(boxSides[2], 0.5, { width: "100%" }, 1)
      .to(boxSides[3], 0.5, { height: "100%" }, 1.5)

    let controller = new ScrollMagic.Controller()
    let scene = new ScrollMagic.Scene({
      triggerElement: imageRef.current,
      reverse: true,
    })
    scene.setTween(timeline).addTo(controller)
  }, [])

  return (
    <Layout>
      <section className="first-wrapper">
        <div className="heading-wrapper">
          <h1>WORK WITH US</h1>
        </div>
        <p className="description">
          Groovrick is committed to helping teams develop into the best possible
          practitioners and provide an unparalleled foundation for their career.
          Groovrick helps well-rounded professionals acquire leadership skills
          more quickly than at other organizations. Our employees benefit from
          the trusted long-term nature of our client relationships as well as
          the cultural alignment between the client and the organization,
          creating an optimum environment to deliver the work without any
          compromises.
        </p>
        <div className="open-positions">
          <h2>OPEN POSITIONS</h2>
          <div className="position-list">
            {all_jobs.map((job, index) => (
              <div className="position-item" key={job.id}>
                <h3>{pad(index + 1, 2)}</h3>
                <h4>{job.title}</h4>
                <Link to={`/job/${job.id}`}>
                  <div>View Description</div>
                </Link>
              </div>
            ))}
          </div>
          <div className="send-wrapper">
            <Modal tag={"Apply"}>
              <JobForm3 />
            </Modal>
          </div>
        </div>
        <div className="why-groovrick">
          <h2>WHY GROOVRICK?</h2>
          <p>
            We are content creators, engineers, business leaders, gamers,
            technology experts and experience designers. Our teams brainstorm,
            meet deadlines and transform clients' businesses through innovation
            and grit combined. We fuel ourselves with creativity to roll our
            sleeves and get down to work. Our roots are digital, our passion is
            contagious and our people are the best. Sounds good? Join the
            family.
          </p>
        </div>
      </section>

      <section className="full-width">
        <div className="careers-image">
          <div className="image-overlay" ref={imageRef} />
        </div>
        <div className="box-wrapper">
          <div className="box">
            <div className="sides">
              <span className="top-side" ref={s => (boxSides[0] = s)} />
              <span className="right-side" ref={s => (boxSides[1] = s)} />
              <span className="bottom-side" ref={s => (boxSides[2] = s)} />
              <span className="left-side" ref={s => (boxSides[3] = s)} />
            </div>
          </div>
        </div>
      </section>

      <section className="reason-list">
        <div className="reason-wrapper">
          <div className="reason">
            <h3>INNOVATION</h3>
            <p>
              We elevate the spirit with pioneering ideas, new possibilities and
              the imaginative application of art and science to improve people’s
              lives and make a positive lasting impact.
            </p>
          </div>
          <div className="reason">
            <h3>SERVICE</h3>
            <p>
              We work with integrity, taking responsibility for the successful
              outcome of projects. Through mutual respect for colleagues and
              clients, we retain exceptional people and nurture long-term,
              trust-based relationships. We strive for better ways to work,
              ensuring value and velocity at every connection.
            </p>
          </div>
          <div className="reason">
            <h3>QUALITY</h3>
            <p>
              We conscientiously adhere to the highest professional standards
              and superior quality to create influential work that consistently
              surpasses audience, client and community expectations.
            </p>
          </div>
          <div className="reason">
            <h3>THOUGHT</h3>
            <p>
              We believe in progress and the beneficial power of creating what's
              next. We are continuously listening, researching, learning,
              adapting and improving across all aspects of our organization and
              the work we do.
            </p>
          </div>
        </div>
        <div className="value-wrapper">
          <h1>VALUES</h1>
        </div>
      </section>

      <style global jsx>{`
        .first-wrapper {
          width: 65%;
          margin: 0 auto;
        }
        .heading-wrapper {
          margin-bottom: 0 !important;
        }

        .heading-wrapper h1:before {
          content: "WORK WITH US";
        }

        .open-positions {
          text-align: center;
          margin-top: 8rem;
        }
        .open-positions h2 {
          font-size: 1.3rem;
          margin: 0;
        }
        .position-list {
          margin: 4rem 0 6rem 0;
          display: flex;
        }
        .position-item {
          flex: 1;
          margin: 0 1rem;
        }
        .position-item h3 {
          font-size: 3rem;
          color: transparent;
          margin: 0;
          -webkit-text-stroke: 1px var(--blue);
        }
        .position-item h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
        }
        .position-item a {
          color: var(--pink);
          font-size: 0.8rem;
        }
        .send-wrapper {
          display: flex;
          justify-content: center;
        }

        .why-groovrick {
          margin-top: 12rem;
        }
        .why-groovrick h2 {
          font-size: 2rem;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }
        .why-groovrick p {
          margin-bottom: 0;
          margin-top: 4rem;
        }

        .reason-list {
          margin-top: 6rem;
          margin-bottom: 6rem;
          width: 82.5%;
          margin-left: auto;
          display: flex;
          height: 130vh;
        }
        .reason-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .reason {
          margin: 1.5rem 0;
        }
        .reason h3 {
          font-weight: 600;
          font-size: 1rem;
          color: var(--blue);
        }
        .value-wrapper {
          flex: 1;
          position: relative;
        }
        .value-wrapper h1 {
          width: 130vh;
          max-width: 1000px;
          font-size: 10rem;
          color: transparent;
          -webkit-text-stroke: 1px var(--pink);
          text-shadow: 0px 0px 4.5px var(--black), 0 0 4.5px var(--pink);
          margin: 0;
          left: 107.5%;
          text-align: center;
          transform: rotate(90deg);
          transform-origin: 0 0;
          position: absolute;
        }

        .full-width {
          margin: 5rem 0;
          position: relative;
          height: 90vh;
        }
        .careers-image {
          overflow: hidden;
          right: 0;
          top: 0;
          position: absolute;
          width: 80%;
          height: 90%;
          background-image: url(${careersImage});
          background-size: cover;
        }
        .image-overlay {
          position: absolute;
          top: 0;
          right: 0;
          content: "";
          width: 100%;
          height: 100%;
          background: var(--black);
        }
        .box-wrapper {
          z-index: -1;
          position: absolute;
          width: 50%;
          height: 90%;
          left: 5%;
          top: 10%;
        }
        .box {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .sides {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .sides > span {
          position: absolute;
          background: var(--pink);
          display: block;
          box-shadow: 0px 0px 10px var(--pink);
        }
        .top-side {
          top: 0;
          left: 0;
          display: block;
          width: 0%;
          height: 1px;
        }
        .right-side {
          top: 0;
          right: 0;
          height: 0%;
          width: 1px;
        }
        .bottom-side {
          bottom: 0;
          right: 0;
          width: 0%;
          height: 1px;
        }
        .left-side {
          left: 0;
          bottom: 0;
          width: 1px;
          height: 0%;
        }

        @media only screen and (max-width: 600px) {
          .first-wrapper {
            width: 85%;
          }

          .position-list {
            flex-direction: column;
            margin-bottom: 3rem;
          }
          .position-item {
            margin: 2rem 0;
          }
          .position-item h4 {
            margin: 1rem 0 0.5rem 0;
          }

          .why-groovrick {
            margin-top: 10rem;
          }

          .full-width {
            height: 40vh;
            margin-bottom: 8rem;
          }
          .careers-image {
            width: 90%;
          }

          .reason-list {
            width: 85%;
            margin: 0 auto;
            flex-direction: column;
            height: auto;
          }

          .reason-wrapper {
            order: 2;
          }
          .value-wrapper {
            position: static;
            order: 1;
          }
          .value-wrapper h1 {
            width: auto;
            font-size: 4rem;
            position: static;
            transform: rotate(0);
            transform-origin: 50%;
          }
        }

        @media only screen and (min-width: 2500px) {
          .reason-list {
            max-height: 1000px;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Careers
