import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
// Components
import Header from "../components/Header"
import Services from "../components/Services"
import Courses from "../components/Courses"
import Service from "../components/Service"
import Footer from "../components/Footer"
import data from "../site-data/siteData"

import DisappearingFab from "../components/DisappearingFab"

const EnPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Header />
    <Services />
    <Courses {...data.courses} />
    {data.services.map((it, idx) => (
      <Service key={idx} {...it} />
    ))}

    <Footer />
    <DisappearingFab />
  </Layout>
)

export default EnPage
