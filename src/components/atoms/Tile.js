import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Tile = ({ heading, imgUrl, projectLink }) => {
  return (
    <div
      className="tile"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.5)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <AnchorLink href={projectLink}>
          <h2 className="header">{heading}</h2>
        </AnchorLink>
      </div>
    </div>
  )
}

export default Tile
