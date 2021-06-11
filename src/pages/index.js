import React from "react"
// Components
import flagPL from "../images/1280px-Flag_of_Poland.svg.png"
import flagEN from "../images/1280px-Flag_of_the_United_Kingdom.png"
import flagDE from "../images/1024px-Flag_of_Germany.svg.png"
import Fade from "react-reveal/Fade"
import "../styles/mains.scss"
import siteDataPl from "../site-data/plSiteData"

import LanguageTile from "../components/atoms/LanguageTile"
import Seo from "../components/SEO"

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
      <Seo {...siteDataPl.seo} />
      <div className="landing-wrapper">
        <Fade bottom>
          <h1>
            Wybierz język.
            <br />
            Pick your language.
          </h1>
        </Fade>

        <div className="lngGrid">
          <Fade bottom cascade>
            <LanguageTile linkTo="/pl/" imgUrl={flagPL} linkText="Polski" />
            <LanguageTile linkTo="/en/" imgUrl={flagEN} linkText="English" />
            <LanguageTile linkTo="/de/" imgUrl={flagDE} linkText="Deutsch" />
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
