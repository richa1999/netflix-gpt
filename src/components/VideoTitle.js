import infoicon from "../assets/icons8-info-50.png";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-96 px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="">
        <button className="mx-2 bg-white text-black p-4 px-12 text-lg text-center rounded-lg hover:bg-opacity-90">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-lg text-center bg-opacity-30 rounded-lg hover:bg-opacity-45">
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
