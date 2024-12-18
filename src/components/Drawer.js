import React from "react"
import Drawer from "@mui/material/Drawer"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby-link"

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
