import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Tile = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.5)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content" onClick={() => scrollTo(projectLink)}>
        <h1 className="header">{heading}</h1>
      </div>
    </div>
  )
}

export default Tile
