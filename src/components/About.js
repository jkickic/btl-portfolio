import React from "react"
import Fade from "react-reveal/Fade"
import PromoVideo from "./PromoVideo"
import AboutPerson from "./AboutPerson"
import helenaImg from "../images/helena2.png"
import nataliaImg from "../images/natalia.jpg"
import chrisImg from "../images/chris.png"

const About = ({ siteData }) => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <div className="hi-wrapper">
            <h1>
              <b>{siteData.about.heading}</b>
            </h1>
            <h2>{siteData.about.subheading}</h2>
            <div className="about-people-wrapper">
              <AboutPerson paragraphs={siteData.about.helena.paragraphs} imgSrc={helenaImg} />
              <AboutPerson paragraphs={siteData.about.natalia.paragraphs} imgSrc={nataliaImg} />
              <AboutPerson paragraphs={siteData.about.chris.paragraphs} imgSrc={chrisImg} />
            </div>
          </div>

          <div className="about-content-wrapper">
            {siteData.about.content.map((it, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: it }} />
            ))}
          </div>

          <div className="video-wrapper">
            <PromoVideo siteData={siteData} />
          </div>

          <Fade bottom cascade>
            <div className="heading-wrapper">
              {siteData.headerTagline.map((it, idx) => (
                <h2 key={idx}>
                  <i>{it}</i>
                </h2>
              ))}
            </div>
          </Fade>
          <Fade bottom>
            <a
              href={siteData.bookSessionLink}
              target="_blank"
              rel="noreferrer"
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
