import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 relative z-10 pl-12">
        <MovieList title={"Now Playing"} moviesData={movies} />
        <MovieList title={"Trending"} moviesData={movies} />
        <MovieList title={"Popular"} moviesData={movies} />
        <MovieList title={"Upcoming Movies"} moviesData={movies} />
        <MovieList title={"Horror"} moviesData={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
