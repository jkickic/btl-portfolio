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
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="links-wrapper">
            {renderMenu ? (
              <ButtonGroup variant="text">
                <Button onClick={() => scrollTo("#services")}>Services</Button>
                <Button onClick={() => scrollTo("#about")}>About</Button>
                <Button onClick={() => scrollTo("#contact")}>Contact</Button>
              </ButtonGroup>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
