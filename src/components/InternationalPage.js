import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
// Components
import Drawer from "../components/Drawer"
import About from "../components/About"
import Services from "../components/Services"
import Courses from "../components/Courses"
import Divider from "../components/atoms/Divider"
import Service from "../components/Service"
import Contact from "../components/Contact"

import DisappearingFab from "../components/DisappearingFab"

const InternationalPage = ({ siteData }) => (
  <Layout siteData={siteData}>
    <Seo title={siteData.title} />
    <Drawer siteData={siteData} />
    <About siteData={siteData} />
    <Divider />
    <Services siteData={siteData} />
    <Courses {...siteData.courses} />
    {siteData.services.map((it, idx) => (
      <Service key={idx} {...it} />
    ))}
    <Divider />
    <Contact siteData={siteData} />
    <DisappearingFab />
  </Layout>
)

export default InternationalPage
