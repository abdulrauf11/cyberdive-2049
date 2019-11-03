import React, { useEffect, useState } from "react"
import Menu from "./Menu"
import Header from "./Header"
import Footer from "./Footer"

const Layout = props => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function handleScroll() {
    let scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop
    setAnimate(scrollPosition > 50 ? true : false)
  }

  return (
    <>
      <Header animate={animate} />
      <Menu />
      {props.children}
      {!props.onlyHeader && <Footer />}
    </>
  )
}

export default Layout
