import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Button, ButtonGroup, Menu, MenuItem } from "@material-ui/core"
import Link from "gatsby-link"

const Navbar = ({ siteData }) => {
  const languages = siteData.languages
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className="navbar-section" id="navbar">
      <div className="background-container">
        <Button
          aria-controls="language-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className="language-menu-button"
        >
          <img
            className="language-flag"
            src={siteData.currentLng.flag}
            alt={siteData.currentLng.code}
          />
        </Button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className="language-menu"
        >
          {Object.keys(languages)
            .filter(
              lngKey => languages[lngKey].code !== siteData.currentLng.code
            )
            .map(lngKey => (
              <div className="language-flag-menu-item">
                <MenuItem onClick={handleClose}>
                  <Link to={`/${languages[lngKey].code}/`}>
                    <img src={languages[lngKey].flag} />
                  </Link>
                </MenuItem>
              </div>
            ))}
        </Menu>
        <div className="logo-container" />
      </div>
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
    </div>
  )
}

export default Navbar
