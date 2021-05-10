import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
// Components
import Header from "../components/Header"
import Services from "../components/Services"
import Courses from "../components/Courses"
import Service from "../components/Service"
import Contact from "../components/Contact"
import data from "../site-data/siteData"

import DisappearingFab from "../components/DisappearingFab"

const EnPage = () => (
  <Layout>
    <SEO title={data.title} />
    <Header />
    <Services />
    <Contact />
    <Courses {...data.courses} />
    {data.services.map((it, idx) => (
      <Service key={idx} {...it} />
    ))}
    <DisappearingFab />
  </Layout>
)

export default EnPage
