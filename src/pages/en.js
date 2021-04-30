import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
// Components
import Header from "../components/Header"
import Services from "../components/Services"
import Service from "../components/Service"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import data from "../site-data/siteData"

import DisappearingFab from "../components/DisappearingFab"

const EnPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Services />
    {data.services.map((it, idx) => (
      <Service key={idx} {...it} />
    ))}
    <Header />
    <Promotion />
    <Footer />
    <DisappearingFab />
  </Layout>
)

export default EnPage
