import React, { Suspense } from "react"
import Layout from "../components/DefaultLayout"
import SEO from "../components/SEO"
import Loader from "../components/Loader"
const Hero = React.lazy(() => import("../components/HeroCyber"))

const Index = () => {
  return (
    <Layout onlyHeader={true}>
      <SEO />
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
    </Layout>
  )
}

export default Index
