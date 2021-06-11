import React from "react"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import AnchorLink from "react-anchor-link-smooth-scroll"
import Link from "gatsby-link"

export default function PersistentDrawerLeft({ siteData }) {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className="drawer-container">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {siteData.navigation.map((nav, index) => (
            <div key={index}>
              {!!nav.href ? (
                <Link target="_blank" href={nav.href}>
                  <ListItem button key={nav.text}>
                    <ListItemText primary={nav.text} />
                  </ListItem>
                </Link>
              ) : (
                <ListItem button key={nav.text}>
                  <AnchorLink href={nav.selector}>
                    <ListItemText primary={nav.text} />
                  </AnchorLink>
                </ListItem>
              )}
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  )
}
