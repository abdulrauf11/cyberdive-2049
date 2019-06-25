import React from "react"
import Hamburger from "./Hamburger"
import Overlay from "./Overlay"

class Menu extends React.Component {
  state = {
    isActive: false,
  }
  componentDidUpdate() {
    if (this.state.isActive) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }
  componentWillUnmount() {
    document.body.style.overflowY = "auto"
    this.setState({ isActive: false })
  }
  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }
  render() {
    return (
      <section>
        <div onClick={this.handleClick}>
          <Hamburger isActive={this.state.isActive} />
        </div>
        <Overlay isActive={this.state.isActive} />
      </section>
    )
  }
}

export default Menu
