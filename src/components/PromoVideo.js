import React from "react"
import Youtube from "react-lazyload-youtube"
import "react-lazyload-youtube/dist/index.css"

const PromoVideo = ({ siteData }) => {
  return (
    <Youtube
      width="100%"
      height="100%"
      videoId={siteData.promoVideoId}
      imgSize="sddefault"
    />
  )
}

PromoVideo.propTypes = {}

export default PromoVideo
