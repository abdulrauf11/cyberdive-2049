import React from "react"
import Layout from "../components/DefaultLayout"
import SEO from "../components/SEO"
import HeroCyber from "../components/HeroCyber"

const Index = () => {
  return (
    <Layout onlyHeader={true}>
      <SEO />
      <HeroCyber />
    </Layout>
  )
}

export default Index
