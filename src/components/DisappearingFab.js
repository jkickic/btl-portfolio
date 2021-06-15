import React, { Component } from "react"
import Fab from "@material-ui/core/Fab"
import NavigationIcon from "@material-ui/icons/Navigation"
import AnchorLink from "react-anchor-link-smooth-scroll"

class DisappearingFab extends Component {
  constructor() {
    super()
    this.state = { shouldHide: true }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll)
  }

  listenToScroll = () => {
    const shouldHide = window.pageYOffset < window.innerHeight
    this.setState({
      shouldHide,
    })
  }

  render() {
    return (
      <div>
        {this.state.shouldHide ? (
          ""
        ) : (
          <AnchorLink href="#navbar">
            <Fab id="fab" variant="extended">
              <NavigationIcon className="fabLink" />
            </Fab>
          </AnchorLink>
        )}
      </div>
    )
  }
}

export default DisappearingFab
