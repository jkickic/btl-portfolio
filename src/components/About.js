import React, { lazy, Suspense } from "react"
import Fade from "react-reveal/Fade"
import { CircularProgress } from "@material-ui/core"
const PromoVideo = lazy(() => import("./PromoVideo"))

const About = ({ siteData }) => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <div className="hi-wrapper">
            <h2>
              {siteData.about.heading}
              {" 👋"}
            </h2>
          </div>

          <div className="about-content-wrapper">
            {siteData.about.content.map((it, idx) => (
              <p id={idx} dangerouslySetInnerHTML={{ __html: it }} />
            ))}
          </div>

          <div className="video-wrapper">
            <Suspense fallback={<CircularProgress />}>
              <PromoVideo siteData={siteData} />
            </Suspense>
          </div>

          <Fade bottom cascade>
            <div className="heading-wrapper">
              {siteData.headerTagline.map((it, idx) => (
                <h1 id={idx}>{it}</h1>
              ))}
            </div>
          </Fade>
          <Fade bottom>
            <a
              href={siteData.contact.facebookSessionLink}
              target="_blank"
              className="primary-btn"
            >
              {siteData.contact.fbBookSessionText}
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default About
