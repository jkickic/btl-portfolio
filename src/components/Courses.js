import React from "react"
import Fade from "react-reveal/Fade"
import * as PropTypes from "prop-types"
import { magic } from "./utils"

var imgDiv = img => (
  <div
    className="image-wrapper"
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url(${img})`,
    }}
  />
)

var createContent = function (listOfItems) {
  if (!!listOfItems && listOfItems.length > 0) {
    return (
      <ul>
        {listOfItems.map((item, idx) => (
          <li key={idx}>
            {imgDiv(item.imageSrc)}
            <div className="text-wrapper">
              <h3>{item.itemTitle}</h3>
              {mapParagraphs(item.paragraphs)}
            </div>
          </li>
        ))}
      </ul>
    )
  }
  return ""
}

const mapParagraphs = function (paragraphs) {
  if (!!paragraphs && paragraphs.length > 0) {
    return (
      <>
        {paragraphs.map((it, idx) => {
          return <p key={idx}>{magic(it)}</p>
        })}
      </>
    )
  }
  return ""
}

const Courses = ({ title, listOfItems, id }) => {
  return (
    <div className="section" id={id}>
      <div className="container">
        <div className="courses-section">
          <div className="content">
            <Fade bottom>
              <h2>{title}</h2>
            </Fade>
            {createContent(listOfItems)}
          </div>
        </div>
      </div>
    </div>
  )
}

Courses.propTypes = {
  title: PropTypes.string,
  listOfItems: PropTypes.arrayOf(PropTypes.any),
  id: PropTypes.string,
}

export default Courses
