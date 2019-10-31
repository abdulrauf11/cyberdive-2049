import React from "react"
import Layout from "../components/DefaultLayout"
import SEO from "../components/SEO"
import HeroCyber from "../components/HeroCyber"

const Index = () => {
  return (
    <Layout onlyHeader>
      <SEO />
      <HeroCyber />
    </Layout>
  )
}

export default Index
