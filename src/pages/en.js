import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
// Components
import Drawer from "../components/Drawer"
import Header from "../components/Header"
import Services from "../components/Services"
import Courses from "../components/Courses"
import Divider from "../components/atoms/Divider"
import Service from "../components/Service"
import Contact from "../components/Contact"
import data from "../site-data/siteData"

import DisappearingFab from "../components/DisappearingFab"

const EnPage = () => (
  <Layout>
    <SEO title={data.title} />
    <Drawer />
    <Header />
    <Divider />
    <Services />
    <Courses {...data.courses} />
    {data.services.map((it, idx) => (
      <Service key={idx} {...it} />
    ))}
    <Divider />
    <Contact />
    <DisappearingFab />
  </Layout>
)

export default EnPage
