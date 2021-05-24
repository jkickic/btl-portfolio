import React from "react"
import Fade from "react-reveal/Fade"
import data from "../site-data/siteData"
import { useMediaQuery } from "@material-ui/core"
import constants from "./constants"

const Header = () => {
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
                  {data.heading}
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
              src={data.promoVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <Fade bottom cascade>
            <div className="heading-wrapper">
              {data.headerTagline.map((it, idx) => (
                <h1 id={idx}>{it}</h1>
              ))}
            </div>
          </Fade>
          <Fade bottom>
            <a
              href={data.contact.facebookSessionLink}
              target="_blank"
              className="primary-btn"
            >
              {data.contact.fbBookSessionText}
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
