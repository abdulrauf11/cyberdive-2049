import React from "react"
import aboutVideo from "../images/about/about_video_compressed.mp4"
import aboutVideoSmall from "../images/about/about_video_small_compressed.mp4"
import { Player, ControlBar, BigPlayButton } from "video-react"

const AboutVideo = () => {
  return (
    <div className="video">
      {document.body.offsetWidth > 600 && (
        <Player autoPlay fluid loop muted playsInline src={aboutVideo}>
          <ControlBar disableCompletely={true} />
          <BigPlayButton position="center" />
        </Player>
      )}
      {document.body.offsetWidth <= 600 && (
        <Player
          autoPlay
          loop
          muted
          playsInline
          aspectRatio="4:5"
          src={aboutVideoSmall}
        >
          <ControlBar disableCompletely={true} />
          <BigPlayButton position="center" />
        </Player>
      )}
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
