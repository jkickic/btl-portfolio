import React from "react"
import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material"
import { Link } from "gatsby-link"
import AnchorLink from "react-anchor-link-smooth-scroll"

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
            .map((lngKey, idx) => (
              <div key={idx} className="language-flag-menu-item">
                <MenuItem onClick={handleClose}>
                  <Link to={`/${languages[lngKey].code}/`}>
                    <img
                      src={languages[lngKey].flag}
                      alt={languages[lngKey].code}
                    />
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
                  <AnchorLink href={nav.selector}>
                    <Button className="navbarButton">{nav.text}</Button>
                  </AnchorLink>
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
