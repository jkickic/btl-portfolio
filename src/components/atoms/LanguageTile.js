import React from "react"
import Link from "gatsby-link"

const LanguageTile = ({ linkTo, linkText, imgUrl }) => {
  return (
    <div
      className="lngCard"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.3)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <Link to={linkTo}>
          <h1>{linkText}</h1>
        </Link>
      </div>
    </div>
  )
}

export default LanguageTile
