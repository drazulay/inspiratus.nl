import './styles.css';

const Hpme = () => {
  return (
    <div className="text-container">
        <video autoPlay={true} muted={true} loop={true} id="bg_video">
          <source src="/src/assets/bg_video.mp4" type="video/mp4" />
        </video>
        <h1>inspir@tus.nl</h1>
      </div>
  )
}

export default Hpme;
