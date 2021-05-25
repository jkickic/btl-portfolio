import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import constants from "./constants"
import { Button, ButtonGroup, useMediaQuery } from "@material-ui/core"
import Link from "gatsby-link"

const Navbar = () => {
  var isPortrait = useMediaQuery(constants.media.portrait)
  var lessThanTablet = useMediaQuery(
    constants.media.maxWidth(constants.media.breakpoints.tablet)
  )
  const renderMenu = !(isPortrait && lessThanTablet)
  return (
    <div className="navbar-section">
      <div className="background-container">
        <div className="logo-container" />
      </div>
      {renderMenu ? (
        <div className="navigation-container">
          <div className="links-wrapper">
            <ButtonGroup variant="text">
              <Button
                className="navbarButton"
                onClick={() => scrollTo("#home")}
              >
                About
              </Button>
              <Button
                className="navbarButton"
                onClick={() => scrollTo("#services")}
              >
                Services
              </Button>
              <Link target="_blank" to="https://btllanguages.blogspot.com/">
                <Button className="navbarButton">Blog</Button>
              </Link>
              <Button
                className="navbarButton"
                onClick={() => scrollTo("#contact")}
              >
                Contact
              </Button>
            </ButtonGroup>
          </div>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Navbar
