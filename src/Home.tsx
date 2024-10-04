import './styles.css';

import videoSrc from './assets/bg_video.mp4';

const Hpme = () => {
  return (
    <div className="text-container">
        <video id="bg_video"
               src={videoSrc}
               autoPlay={true}
               loop={true}
               mediaGroup="bg"
               preload="auto"
               playsInline={true}
               muted={true} />

        <h1>inspir@tus.nl</h1>
      </div>
  )
}

export default Hpme;
