import React from "react"
import Fade from "react-reveal/Fade"
import data from "../site-data/siteData"
import logo from "../images/logo2.png"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <div className="hi-wrapper">
            <img src={logo} alt="btl-logo"/>
            <Fade bottom><h1>{data.heading}{" 👋"}</h1></Fade>
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
