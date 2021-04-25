import React from "react"
import Fade from "react-reveal/Fade"

import Tile from "./atoms/Tile"

import data from "../site-data/siteData"

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Our services</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Tile
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.moveTo}
                ></Tile>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
