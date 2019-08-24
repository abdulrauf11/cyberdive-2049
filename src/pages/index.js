import React from "react"
import Layout from "../components/DefaultLayout"
import SEO from "../components/SEO"
import HeroCyber from "../components/HeroCyber"
// import Loader from "../components/Loader"
// import Loadable from "react-loadable"

// function Loading(props) {
//   if (props.error) {
//     return (
//       <div>
//         Error! <button onClick={props.retry}>Retry</button>
//       </div>
//     )
//   } else if (props.pastDelay) {
//     return Loader
//   } else {
//     return null
//   }
// }

// const HeroCyber = Loadable({
//   loader: () => import("../components/HeroCyber"),
//   loading: Loading,
// })

const Index = () => {
  return (
    <Layout onlyHeader={true}>
      <SEO />
      <HeroCyber />
    </Layout>
  )
}

export default Index
