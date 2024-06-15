import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieResults) return null;
  return (
    <div className="m-4 p-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => {
          return <MovieList
            key={movieName}
            title={movieName}
            moviesData={movieResults[index]}
          />;
        })}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
