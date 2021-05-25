import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import constants from "./constants"
import { Button, ButtonGroup, useMediaQuery } from "@material-ui/core"
import Link from "gatsby-link"
import siteData from "../site-data/siteData"

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
              {siteData.navigation.map((nav, index) => (
                <div key={index}>
                  {!!nav.href ? (
                    <Link target="_blank" to={nav.href}>
                      <Button className="navbarButton">{nav.text}</Button>
                    </Link>
                  ) : (
                    <Button
                      className="navbarButton"
                      onClick={() => scrollTo(nav.selector)}
                    >
                      {nav.text}
                    </Button>
                  )}
                </div>
              ))}
            </ButtonGroup>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Navbar
