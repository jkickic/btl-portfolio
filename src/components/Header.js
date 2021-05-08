import React from "react"
import Fade from "react-reveal/Fade"
import data from "../site-data/siteData"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>
              {data.heading}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              {data.headerTagline.map((it, idx) => (
                <h1 id={idx}>{it}</h1>
              ))}
            </div>
          </Fade>
          <Fade bottom>
            <a
              href={data.bookLessonLink}
              target="_blank"
              className="primary-btn"
            >
              Book a lesson now!
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
