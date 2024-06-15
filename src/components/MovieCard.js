import { IMG_CDN } from "../utils/constants"

const MovieCard = ({poster_path}) => {
  if(!poster_path) return null
  return (
    <div className="w-48 pr-4 hover:cursor-pointer hover:w-56">
        <img src={IMG_CDN+poster_path} alt="movie-poster" />
    </div>
  )
}

export default MovieCard