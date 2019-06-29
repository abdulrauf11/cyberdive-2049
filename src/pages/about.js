import React, { useRef, useEffect, useState } from "react"
import Layout from "../components/DefaultLayout.js"
import lottie from "lottie-web"
import strategyData from "../images/about/strategy.json"
import serviceFirstData from "../images/about/service-first.json"
import qualityData from "../images/about/quality.json"
import insightsData from "../images/about/inspire.json"
import aboutVideo from "../images/about/about_video_compressed.mp4"
import aboutVideoSmall from "../images/about/about_video_small_compressed.mp4"
import SEO from "../components/SEO"
import { Player, ControlBar } from "video-react"

const About = () => {
  const strategyObject = useRef(null)
  const serviceFirstObject = useRef(null)
  const qualityObject = useRef(null)
  const insightsObject = useRef(null)
  const [videoSrc, setVideoSrc] = useState("")
  useEffect(() => {
    setVideoSrc(document.body.offsetWidth > 600 ? aboutVideo : aboutVideoSmall)
    let strategyAnimation = lottie.loadAnimation({
      renderer: "svg",
      loop: false,
      autoplay: true,
      container: strategyObject.current,
      animationData: strategyData,
    })
    let strategyTimer = setInterval(function() {
      strategyAnimation.stop()
      strategyAnimation.play()
    }, 4000)

    let serviceFirstAnimation = lottie.loadAnimation({
      renderer: "svg",
      loop: false,
      autoplay: true,
      container: serviceFirstObject.current,
      animationData: serviceFirstData,
    })
    let serviceFirstTimer = setInterval(function() {
      serviceFirstAnimation.stop()
      serviceFirstAnimation.play()
    }, 6000)

    let qualityAnimation = lottie.loadAnimation({
      renderer: "svg",
      loop: false,
      autoplay: true,
      container: qualityObject.current,
      animationData: qualityData,
    })
    let qualityTimer = setInterval(function() {
      qualityAnimation.stop()
      qualityAnimation.play()
    }, 5500)

    let insightsAnimation = lottie.loadAnimation({
      renderer: "svg",
      loop: false,
      autoplay: true,
      container: insightsObject.current,
      animationData: insightsData,
    })
    let insightsTimer = setInterval(function() {
      insightsAnimation.stop()
      insightsAnimation.play()
    }, 5000)

    return function cleanup() {
      clearInterval(strategyTimer)
      strategyAnimation.destroy()
      clearInterval(serviceFirstTimer)
      serviceFirstAnimation.destroy()
      clearInterval(qualityTimer)
      qualityAnimation.destroy()
      clearInterval(insightsTimer)
      insightsAnimation.destroy()
    }
  }, [])
  return (
    <Layout>
      <SEO title="Groovrick | About" />
      <main>
        <div className="heading-wrapper">
          <h1>WE ARE GROOVRICK</h1>
        </div>
        <section className="who-we-are">
          <div className="video">
            <Player autoPlay fluid loop controls={true} muted src={videoSrc}>
              <ControlBar disableCompletely={true} />
            </Player>
          </div>
          <div className="text">
            <p>
              Located in Bahria Town, Lahore, Groovrick was founded in 2018 with
              the focus on fusing creative & technology to empower businesses,
              young curious talent, local creatives & artists, technology
              experts and organizations to engage in driving social content that
              is original, creative, engaging and meaningful for audience.
            </p>
            <p>
              Combining the expertise of visual aesthetics, high-end gear and
              command over digital media technologies we help you create and
              push your business communications to work for you beyond compare.
              We work with you to formulate the roadmap to tap into evolving
              technologies, business models, trends and demographics. We help
              you to build a presence that makes your business special.
            </p>
          </div>
        </section>
        <section className="strategy mid">
          <div className="content">
            <h2>STRATEGY</h2>
            <p>
              Our techniques are simple yet smart, we craft the combination of
              Research & Insights, Data Analytics and Innovation to constantly
              explore new possibilities. All of it done collaboratively in
              perfect environment with right tools, knowledge, technology and
              entrepreneurial gasoline fueled in-house teams.
            </p>
          </div>
          <div className="image">
            <div className="lottie-item pink" ref={strategyObject} />
          </div>
        </section>
        <section className="service-first mid">
          <div className="image">
            <div className="lottie-item blue" ref={serviceFirstObject} />
          </div>
          <div className="content">
            <h2>SERVICE FIRST</h2>
            <p>
              Groovrick is a services based company, our first priority is
              serving in the best possible way. So our choices and decisions are
              often taken around enhancing our services.
            </p>
          </div>
        </section>
        <section className="quality mid">
          <div className="content">
            <h2>QUALITY</h2>
            <p>
              We challenge ourselves constantly to create content and implement
              technology that has maximum yield and impact larger audience. This
              is how we measure quality.
            </p>
          </div>
          <div className="image">
            <div className="lottie-item pink" ref={qualityObject} />
          </div>
        </section>
        <section className="insights mid">
          <div className="image">
            <div className="lottie-item blue" ref={insightsObject} />
          </div>
          <div className="content">
            <h2>INSPIRE</h2>
            <p>
              We push our own creative boundaries, seek out new challenges, and
              work cooperatively to develop the best possible solutions for our
              clients while inspiring our community and colleagues through our
              content, technologies and actions.
            </p>
          </div>
        </section>
      </main>
      <style jsx>{`
        main {
          width: 70%;
          margin: 0 auto;
        }
        .heading-wrapper h1:before {
          content: "WE ARE GROOVRICK";
        }
        .mid {
          margin: 10rem auto;
          display: flex;
        }
        .mid > * {
          flex: 1;
        }
        .who-we-are .video {
          width: 100%;
          margin-bottom: 7rem;
          border: 1px solid var(--pink);
          border-bottom: 2px solid var(--pink);
        }
        .text {
          margin: 0 auto;
        }
        .text p {
          font-size: 1.1rem;
        }

        .image {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .lottie-item {
          width: 200px;
        }
        .lottie-item.blue {
          filter: drop-shadow(0px 0px 5px var(--blue));
        }
        .lottie-item.pink {
          filter: drop-shadow(0px 0px 5px var(--pink));
        }

        .content {
          display: flex;
          flex-direction: column;
        }
        .content p,
        .content h2 {
          width: 90%;
        }
        .content h2 {
          font-weight: 600;
          font-size: 1.5rem;
        }
        .service-first .content,
        .insights .content {
          align-items: flex-end;
        }

        @media only screen and (max-width: 600px) {
          main {
            width: 85%;
          }
          .mid {
            flex-direction: column;
            margin: 6rem 0;
          }
          .service-first .content,
          .insights .content {
            align-items: flex-start;
          }
          .content {
            order: 1;
          }
          .image {
            margin-top: 2rem;
            order: 2;
          }
          .lottie-item {
            width: 150px;
          }
          .text p {
            font-size: 0.95rem;
          }
        }

        @media only screen and (min-width: 2500px) {
          .lottie-item {
            width: 250px;
          }
        }
        @media only screen and (max-width: 600px) {
          .who-we-are .video {
            border-bottom: 1px solid var(--pink);
          }
        }
      `}</style>
    </Layout>
  )
}

export default About
