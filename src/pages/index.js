import React from "react"
import Layout from "../components/DefaultLayout"
import SEO from "../components/SEO"
import Loader from "../components/Loader"
import Loadable from "react-loadable"

const Hero = Loadable({
  loader: () => import("../components/HeroCyber"),
  loading: Loader,
})

const Index = () => {
  return (
    <Layout onlyHeader={true}>
      <SEO />
      <Hero />
    </Layout>
  )
}

export default Index
