import "./FrontPageVideo.css";

const FrontPageVideo = ({ onClickFunction }) => {
  const videoSource = "/media/dogVideo2.mp4";
  return (
    <div className="front-page-container">
      <video
        style={{}}
        autoPlay="autoplay"
        loop="loop"
        muted
        // ref={video}
        id="video-id"
        className="video"
      >
        {/* TODO make it accept multiple media types */}
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="front-page-content">
        <h1>Tobiascao</h1>
        <h3>Aqui treinamos o teu melhor amigo</h3>
        <button
          onClick={() => onClickFunction(0)}
          className="front-page-button"
        >
          Saber mais
        </button>
      </div>
    </div>
  );
};

export default FrontPageVideo;
