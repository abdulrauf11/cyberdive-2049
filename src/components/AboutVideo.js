import React, { useEffect, useState } from "react"
import aboutVideo from "../images/about/about_video_compressed.mp4"
import aboutVideoSmall from "../images/about/about_video_small_compressed.mp4"
import { Player, ControlBar, BigPlayButton } from "video-react"

const AboutVideo = () => {
  const [videoSrc, setVideoSrc] = useState("")
  useEffect(() => {
    setVideoSrc(document.body.offsetWidth > 600 ? aboutVideo : aboutVideoSmall)
  })
  return (
    <div className="video">
      <Player autoPlay fluid loop muted src={videoSrc}>
        <ControlBar disableCompletely={true} />
        <BigPlayButton position="center" />
      </Player>
      <style>{`
          .video {
            width: 100%;
            margin-bottom: 7rem;
            border: 1px solid var(--pink);
            border-bottom: 2px solid var(--pink);
          }
          @media only screen and (max-width: 600px) {
            .video {
              border-bottom: 1px solid var(--pink);
            }
          }
        `}</style>
    </div>
  )
}

export default AboutVideo
