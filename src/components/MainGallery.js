import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

function MainGallery() {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      imageOne: file(
        relativePath: { eq: "services/digital-transformation.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "services/social-ecommerce.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(
        relativePath: { eq: "services/design-development.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFour: file(relativePath: { eq: "services/creative.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFive: file(
        relativePath: { eq: "services/digital-consultancy.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="main-gallery">
      <div className="box">
        <div className="box-inner">
          <span className="index">01</span>
          <span className="title">
            Digital <br /> Transformation
          </span>
          <span className="image">
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="center"
              style={{
                height: "100%",
              }}
            />
          </span>
          <span className="button-wrapper">
            <Link
              style={{
                padding: "0.5rem 0.8rem",
                border: "1px solid var(--pink)",
                fontSize: "0.7rem",
              }}
              to="/services/digital-transformation"
            >
              Learn More
            </Link>
          </span>
        </div>
      </div>
      <div className="box">
        <div className="box-inner">
          <span className="index">02</span>
          <span className="title">
            Social & <br /> Ecommerce
          </span>
          <span className="image">
            <Img
              fluid={data.imageTwo.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="center"
              style={{
                height: "100%",
              }}
            />
          </span>
          <span className="button-wrapper">
            <Link
              style={{
                padding: "0.5rem 0.8rem",
                border: "1px solid var(--pink)",
                fontSize: "0.7rem",
              }}
              to="/services/social-&-ecommerce"
            >
              Learn More
            </Link>
          </span>
        </div>
      </div>
      <div className="box">
        <div className="box-inner">
          <span className="index">03</span>
          <span className="title">
            Design & <br /> Development
          </span>
          <span className="image">
            <Img
              fluid={data.imageThree.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="center"
              style={{
                height: "100%",
              }}
            />
          </span>
          <span className="button-wrapper">
            <Link
              style={{
                padding: "0.5rem 0.8rem",
                border: "1px solid var(--pink)",
                fontSize: "0.7rem",
              }}
              to="/services/design-&-development"
            >
              Learn More
            </Link>
          </span>
        </div>
      </div>
      <div className="box">
        <div className="box-inner">
          <span className="index">04</span>
          <span className="title">Creative</span>
          <span className="image">
            <Img
              fluid={data.imageFour.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="center"
              style={{
                height: "100%",
              }}
            />
          </span>
          <span className="button-wrapper">
            <Link
              style={{
                padding: "0.5rem 0.8rem",
                border: "1px solid var(--pink)",
                fontSize: "0.7rem",
              }}
              to="/services/creative"
            >
              Learn More
            </Link>
          </span>
        </div>
      </div>
      <div className="box">
        <div className="box-inner">
          <span className="index">05</span>
          <span className="title">
            Digital <br /> Consultancy
          </span>
          <span className="image">
            <Img
              fluid={data.imageFive.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="center"
              style={{
                height: "100%",
              }}
            />
          </span>
          <span className="button-wrapper">
            <Link
              style={{
                padding: "0.5rem 0.8rem",
                border: "1px solid var(--pink)",
                fontSize: "0.7rem",
              }}
              to="/services/digital-&-consultancy"
            >
              Learn More
            </Link>
          </span>
        </div>
      </div>
      <style>{`
        .main-gallery {
            min-height: 80vh; 
            display: flex;
        }
        .box {
            flex: 1;
            transition: all 0.5s ease-out;
        }
        .box:hover {
            flex: 3;
        }
        .box-inner {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
            border: 1px solid var(--pink);
            border-right: 0;        
        }
        .box:nth-child(1) .box-inner {
            border-left: 0;        
        }
        .index {
            font-weight: 700;
            font-size: 3rem;
            color: transparent;
            margin: 0;
            -webkit-text-stroke: 1px var(--blue);
        }
        .title {
            margin: 2rem 0;
            text-transform: uppercase;
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
        }
        .image {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.1;
            transition: opacity 0.3s;
        }
        .box:hover .image{
            opacity: 0.3;
        }
        .button-wrapper {
            position: absolute;
            bottom: 20%;
            display: block;
        }

        @media only screen and (max-width: 600px) {
        .main-gallery {
            flex-direction: column;
        }
        .box {
            height: 60vh;
        }
        .box .box-inner {
            border: 0;
            border-bottom: 1px solid var(--pink);
        }
        .box:nth-child(1) .box-inner {
            border-top: 1px solid var(--pink);
        }
        .button-wrapper {
            position: static;
            margin-top: 0.5rem;
        }
        }
    `}</style>
    </section>
  )
}

export default MainGallery
