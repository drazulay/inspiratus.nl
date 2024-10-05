import './styles.css';

import videoSrc from './assets/bg_video.mp4'

const VideoContainer = () => {
  return (
    <div className="container video-container">
        <video id="bg_video"
               src={videoSrc}
               autoPlay={true}
               loop={true}
               mediaGroup="bg"
               preload="auto"
               playsInline={true}
               muted={true} />
      </div>
  )
}

export default VideoContainer;
