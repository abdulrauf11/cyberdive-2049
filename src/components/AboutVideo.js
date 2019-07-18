import React, { useEffect, useState } from "react"
import aboutVideo from "../images/about/about_video_compressed.mp4"
import aboutVideoSmall from "../images/about/about_video_small_compressed.mp4"
import { Player, ControlBar, BigPlayButton } from "video-react"

const AboutVideo = () => {
  const [videoSrc, setVideoSrc] = useState("")
  const [aspectRatio, setAspectRatio] = useState("")
  useEffect(() => {
    setVideoSrc(document.body.offsetWidth > 600 ? aboutVideo : aboutVideoSmall)
    setAspectRatio(document.body.offsetWidth > 600 ? "16:9" : "4:5")
  }, [])
  return (
    <div className="video">
      <Player
        fluid
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        preload="metadata"
        aspectRatio={aspectRatio}
        src={videoSrc}
      >
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
