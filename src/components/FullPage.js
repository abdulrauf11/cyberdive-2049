import React from "react"
import ServiceItem from "./ServiceItem"
import ReactFullpage from "@fullpage/react-fullpage"
import Footer from "../components/Footer.js"
import { Link } from "gatsby"

const FullPage = ({ idata }) => {
  const serviceList = [
    {
      heading: "DIGITAL TRANSFORMATION",
      link: "/service/digital-transformation",
      description:
        "Ignite your digital inventiveness, transform your business for the next cybernated wave 4.0 with the journey towards evolved customer experience and business agility.",
      imgSrc: idata.data.imageOne.childImageSharp.fluid,
    },
    {
      heading: "SOCIAL & ECOMMERCE",
      link: "/service/social-&-ecommerce",
      description:
        "Fueled with creative insights and driven by engagement, our cutting-edge social media management and e-com solutions are disruptive, fused across creativity, design, human-centered UX, high-end content & ultra-modern tech.",
      imgSrc: idata.data.imageTwo.childImageSharp.fluid,
    },
    {
      heading: "DESIGN & DEVELOPMENT",
      link: "/service/digital-transformation",
      description:
        "We’re design-thinking driven, bringing brand, UX and technology together with innovative approaches.",
      imgSrc: idata.data.imageThree.childImageSharp.fluid,
    },
    {
      heading: "CREATIVE",
      link: "/service/digital-transformation",
      description:
        "Catch the eye of digital-first next-gen consumers that are inspired by high-end purposeful visual content curated for maximum engagement and conversions.",
      imgSrc: idata.data.imageFour.childImageSharp.fluid,
    },
    {
      heading: "DIGITAL CONSULTANCY",
      link: "/service/digital-transformation",
      description:
        "Consult us to make a shift from now to next by merging imagination and technology in order to grow in the age of digital transformation.",
      imgSrc: idata.data.imageFive.childImageSharp.fluid,
    },
  ]
  const opts = {
    licenseKey: "34FC5148-DB9B4EC1-86F23820-3A6C6F7A",
    scrollingSpeed: 1200,
  }

  return (
    <ReactFullpage
      {...opts}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <ServiceItem {...serviceList[0]} count={1} />
            <ServiceItem {...serviceList[1]} count={2} />
            <ServiceItem {...serviceList[2]} count={3} />
            <ServiceItem {...serviceList[3]} count={4} />
            <ServiceItem {...serviceList[4]} count={5} />
            <div className="section">
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
              </div>
            </div>
            <div className="section">
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

export default FullPage
