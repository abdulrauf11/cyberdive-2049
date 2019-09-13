import React from "react"
import Layout from "../components/DefaultLayout"
import SEO from "../components/SEO"
import HeroCyber from "../components/HeroCyber"
import MainGallery from "../components/MainGallery"
import MainText from "../components/MainText"
import ContactSlide from "../components/ContactSlide"

const Index = () => {
  return (
    <Layout>
      <SEO />
      <HeroCyber />
      <div className="line"></div>
      <MainText />
      <MainGallery />
      <ContactSlide />
      <style>{`
        .line {
          width: 100%;
          height: 1px;
          background: var(--pink);
        }
        `}</style>
    </Layout>
  )
}

export default Index
