import React from "react"
import ReactPlayer from "react-player/lazy"

const PromoVideo = ({ siteData }) => {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      url={siteData.promoVideo}
      config={{
        youtube: {
          playerVars: {},
        },
      }}
    />
  )
}

PromoVideo.propTypes = {}

export default PromoVideo
