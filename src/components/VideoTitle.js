import infoicon from "../assets/icons8-info-50.png";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-20 px-6 md:pt-72 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl md:text-4xl font-bold tex-white">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="flex">
        <button className="md:mx-2 md:bg-white text-white md:text-black py-2 md:py-4 md:px-12  text-lg text-center rounded-lg hover:bg-opacity-90">
          ▶ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-lg text-center bg-opacity-30 rounded-lg hover:bg-opacity-45">
        <div className="flex items-center">
        <img className="w-4 h-4 m-2" src={infoicon} alt="icon" />
          More Info
        </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
