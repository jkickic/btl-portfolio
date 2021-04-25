import React from "react"
import Fab from "@material-ui/core/Fab"
import NavigationIcon from "@material-ui/icons/Navigation"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
// Components
import Header from "../components/Header"
import Services from "../components/Services"
import Service from "../components/Service"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import data from "../site-data/siteData"

import scrollTo from "gatsby-plugin-smoothscroll"

const EnPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Services />
    {data.services.map(it => (
      <Service {...it} />
    ))}
    <Header />
    <Promotion />
    <Footer />
    <Fab id="fab" variant="extended" onClick={() => scrollTo("#services")}>
      <NavigationIcon />
    </Fab>
  </Layout>
)

export default EnPage
