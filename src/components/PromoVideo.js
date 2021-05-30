import React, { PureComponent } from "react"
import PropTypes from "prop-types"

const PromoVideo = ({ siteData }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={siteData.promoVideo}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

PromoVideo.propTypes = {}

export default PromoVideo
