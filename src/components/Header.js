import React from "react"
import Fade from "react-reveal/Fade"
import { useMediaQuery } from "@material-ui/core"
import constants from "./constants"

const Header = ({ siteData }) => {
  var isPortrait = useMediaQuery(constants.media.portrait)
  var lessThanTablet = useMediaQuery(
    constants.media.maxWidth(constants.media.breakpoints.tablet)
  )
  const renderHi = !(isPortrait && lessThanTablet)
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          {renderHi ? (
            <div className="hi-wrapper">
              <Fade bottom>
                <h1>
                  {siteData.heading}
                  {" 👋"}
                </h1>
              </Fade>
            </div>
          ) : (
            ""
          )}

          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src={siteData.promoVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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

export default Header
