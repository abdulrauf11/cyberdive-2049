import React, { useEffect, useState } from "react"
import { Player, ControlBar, BigPlayButton } from "video-react"

const AboutVideo = () => {
  const [videoSrc, setVideoSrc] = useState("")
  const [aspectRatio, setAspectRatio] = useState("")
  useEffect(() => {
    let aboutVideo =
      "https://res.cloudinary.com/rauf-tech/video/upload/v1564607920/about_video_compressed_engxuj.mp4"
    let aboutVideoSmall =
      "https://res.cloudinary.com/rauf-tech/video/upload/v1564607787/about_video_small_compressed_tih6w3.mp4"
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
