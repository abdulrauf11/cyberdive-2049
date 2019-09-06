import React from "react"
import Layout from "../../components/DefaultLayout"
import SEO from "../../components/SEO"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Service = () => {
  const settings = {
    centerMode: true,
    centerPadding: "5%",
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
        },
      },
    ],
  }

  const serviceObject = {
    name: "Ecommerce",
    introduction: `
    Our branded e-commerce solutions are powered by best-in-class experience strategies that drive transactions.
    `,
    capabilities: [
      "Design & Development",
      "Operations & Maintenance",
      "Managed Social, Marketing & Outreach",
    ],
    process: [
      {
        title: "Business and consumer insights",
        text: `We start with focusing on consumer behaviors and business insights. And to keep that focus true, we push authentic and experience-led approach to helping brands to connect with people and culture.`,
      },
      {
        title: "Digital Experience Strategy",
        text: `When it comes to creating human “path to purchase” experience. We root culture and storytelling with intelligent process at every forefront.`,
      },
      {
        title: "Omni-channel content creation",
        text: `We craft content that ignites the buyers’ intent. From photography to video and copy, we establish the tone and consistency of the brand.`,
      },
      {
        title: "Design and Development",
        text: `Keeping the values, culture, story, offerings and consumer behaviors at the forefront, we develop e-comm. stores resulting in better user experience powered with human centric design and advanced technologies.
        `,
      },
      {
        title: "Monitor and Evolve",
        text: `When we partner, we stick long-term, fixing everything and evolving together. That’s our essence.`,
      },
    ],
  }
  return (
    <Layout>
      <SEO title={`Groovrick | Digital Transformation`} />
      <main>
        <section className="service-description">
          <h1 className="service-heading">{serviceObject.name}</h1>
          <p className="service-introduction">{serviceObject.introduction}</p>
          <div className="capabilities">
            <h3>Capabilities</h3>
            <div>
              {serviceObject.capabilities.map(c => (
                <p className="capability">- {c}</p>
              ))}
            </div>
          </div>
          <section className="platforms">
            <h3>A few platforms we have command over</h3>
            <p>Shopify, WooCommerce, Magento, Bigcommerce</p>
          </section>
        </section>

        <section className="process">
          <div className="heading-big">
            <h1>PROCESS</h1>
          </div>

          <div className="process-list">
            <Slider {...settings}>
              {serviceObject.process.map((p, index) => (
                <div className="process-item-wrapper" key={index}>
                  <div className="process-item">
                    <div className="index">{index + 1}</div>
                    <div className="title">{p.title}</div>
                    <p className="text">{p.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="service-description">
          <h1 className="service-heading">Social Media Story Telling</h1>
          <p className="service-introduction">{serviceObject.introduction}</p>
          <section className="platforms">
            <h3>Platforms we master</h3>
            <p>Instagram, Facebook, Snapchat, Tiktok, Twitter, Linkedin</p>
          </section>
        </section>

        <section className="process">
          <div className="heading-big plans-heading">
            <h1>PLANS</h1>
          </div>

          <div className="process-list">
            <Slider {...settings}>
              {serviceObject.process.map((p, index) => (
                <div className="process-item-wrapper" key={index}>
                  <div className="process-item plans-item">
                    <div className="index">{index + 1}</div>
                    <div className="title">{p.title}</div>
                    <p className="text">{p.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </main>
      <style global jsx>{`
        main {
          padding: 10rem 0 0 0;
        }
        .service-description {
          width: 70%;
          margin: 0 auto;
        }
        .service-heading {
          text-transform: uppercase;
          text-align: center;
          font-size: 3rem;
        }

        .process {
          margin: 5rem 0;
          min-height: 100vh;
          position: relative;
          display: flex;
        }

        .process-list {
          align-self: center;
          width: 80%;
          margin-left: auto;
        }

        .process-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 120vh;
          position: relative;
          width: 50%;
        }

        .plans-item {
          height: 100vh;
        }

        .process-item .index {
          right: -5rem;
          z-index: -1;
          position: absolute;
          font-size: 30rem;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px var(--blue);
        }

        .process-item .title {
          text-transform: uppercase;
          font-size: 2.5rem;
          font-weight: 700;
        }

        .heading-big {
          text-align: center;
          width: 120vh;
          transform: rotate(-90deg) translateX(-100%) translateY(-20%);
          transform-origin: 0 0;
          position: absolute;
        }

        .plans-heading {
          width: 100vh;
        }

        .heading-big h1 {
          margin: 0;
          font-size: 9.5rem;
          color: transparent;
          -webkit-text-stroke: 1px var(--pink);
          text-shadow: 0px 0px 4.5px var(--black), 0 0 4.5px var(--pink);
        }

        .capabilities {
          margin: 2rem 0;
        }

        .capability {
          margin: 0;
        }

        .platforms {
          margin: 2rem 0;
        }

        @media only screen and (max-width: 600px) {
          main {
            padding: 8rem 0 0 0;
          }
          .service-description {
            width: 85%;
          }

          .service-heading {
            text-align: left;
            font-size: 1.5rem;
          }

          .heading-big {
            display: block;
            width: 100%;
            transform: rotate(0) translate(0);
            transform-origin: 50% 50%;
            position: static;
            text-align: center;
          }

          .plan-heading {
            width: 100%;
          }

          .heading-big h1 {
            margin: 0;
            font-size: 3rem;
            color: transparent;
            -webkit-text-stroke: 1px var(--pink);
            text-shadow: 0px 0px 4.5px var(--black), 0 0 4.5px var(--pink);
          }

          .process {
            display: block;
            min-height: auto;
          }

          .process-list {
            width: 100%;
            margin-left: 0;
            margin: 5rem 0;
          }

          .process-item {
            display: block;
            height: auto;
            position: relative;
            margin: 0 auto;
            width: 85%;
          }

          .plans-item {
            height: auto;
          }

          .process-item .index {
            top: 0;
            right: 0;
            font-size: 10rem;
          }

          .process-item .title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Service
