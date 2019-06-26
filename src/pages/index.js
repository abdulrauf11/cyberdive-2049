import React from "react"
import Layout from "../components/DefaultLayout"
import Hero from "../components/HeroCyber"
import SEO from "../components/SEO"

const Index = () => {
  return (
    <Layout onlyHeader={true}>
      <SEO />
      <Hero />
      <style jsx>{``}</style>
    </Layout>
  )
}

export default Index
