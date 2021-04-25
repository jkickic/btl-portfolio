import React from "react"
import Fade from "react-reveal/Fade"
import * as PropTypes from "prop-types"

const cssDesktopWidth = 1024

class Service extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lessThanDesktop: false }
  }

  updateDimensions() {
    const lessThanDesktop = window.innerWidth < cssDesktopWidth
    this.setState({ lessThanDesktop })
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
  }

  render() {
    let { title, paragraphs, img, id, imgRight } = this.props
    let imgDiv = (
      <div
        className="image-wrapper"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${img})`,
        }}
      />
    )
    const imgBeforeText = this.state.lessThanDesktop || !imgRight
    return (
      <div className="section" id={id}>
        <div className="container">
          <div className="service-section">
            {!!imgBeforeText ? imgDiv : ""}
            <div className="content">
              <Fade bottom cascade>
                <h1>{title}</h1>
              </Fade>
              {paragraphs.map(it => (
                <p>{it}</p>
              ))}
            </div>
            {!imgBeforeText ? imgDiv : ""}
          </div>
        </div>
      </div>
    )
  }
}

Service.propTypes = {
  title: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string,
  id: PropTypes.string,
  imgRight: PropTypes.bool,
}

export default Service
