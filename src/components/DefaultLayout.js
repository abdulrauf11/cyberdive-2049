import React from "react"
import Header from "./Header"
import Menu from "./Menu"
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
