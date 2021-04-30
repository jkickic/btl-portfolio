import React from "react"
// Components
import data from "../site-data/siteData"
import flagPL from "../images/1280px-Flag_of_Poland.svg.png"
import flagEN from "../images/1280px-Flag_of_the_United_Kingdom.png"
import flagDE from "../images/1024px-Flag_of_Germany.svg.png"
import Fade from "react-reveal/Fade"
import "../styles/mains.scss"

import LanguageTile from "../components/atoms/LanguageTile"

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
      <div className="landing-wrapper">
        <Fade bottom>
          <h1>Pick your language</h1>
        </Fade>

        <div className="lngGrid">
          <Fade bottom cascade>
            <LanguageTile linkTo="/en/" imgUrl={flagPL} linkText="Polski" />
            <LanguageTile linkTo="/en/" imgUrl={flagEN} linkText="English" />
            <LanguageTile linkTo="/en/" imgUrl={flagDE} linkText="Deutsch" />
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
