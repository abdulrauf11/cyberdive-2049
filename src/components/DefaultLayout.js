import React from "react"
import Menu from "./Menu"
import Header from "./Header"
import Footer from "./Footer"

const Layout = props => {
  return (
    <>
      <Header />
      <Menu />
      {props.children}
      {!props.onlyHeader && <Footer />}
    </>
  )
}

export default Layout
