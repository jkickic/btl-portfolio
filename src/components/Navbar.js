import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import constants from "./constants"
import { Button, ButtonGroup, useMediaQuery } from "@material-ui/core"

const Navbar = () => {
  var isPortrait = useMediaQuery(constants.media.portrait)
  var lessThanTablet = useMediaQuery(
    constants.media.maxWidth(constants.media.breakpoints.tablet)
  )
  const renderMenu = !(isPortrait && lessThanTablet)
  return (
    <div className="navbar-section">
      <div className="background-container">
        <div className="logo-container">
        </div>
      </div>
    </div>
  )
}

export default Navbar
