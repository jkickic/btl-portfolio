import React from "react"
import Link from "gatsby-link"

const LanguageTile = ({ linkTo, linkText, imgUrl }) => {
  return (
    <div
      className="lngCard"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(245, 246, 252, 0)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <Link to={linkTo}>
          <h2>{linkText}</h2>
        </Link>
      </div>
    </div>
  )
}

export default LanguageTile
