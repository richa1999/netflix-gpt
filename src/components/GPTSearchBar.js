import React from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_TOKEN, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovieResults } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(API_TOKEN);

  const fetchSearchedMovies = async (query) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        query +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const response = await data.json();
    return response.results;
  };

  const handleSearchClick = async () => {

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      ". only give me names of 5 movie, comma separated like the example result ahead. Example: The Shawshank Redemption, The Godfather, The Dark Knight, Pulp Fiction, Schindler's List.";

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(gptQuery);
    const response = result.response;
    const GPTMovies = response.text().split(",");

    const promiseArray = GPTMovies.map((movie) => {
      return fetchSearchedMovies(movie);
    });

    const movieArray = await Promise.all(promiseArray);

    dispatch(addGPTMovieResults({ movieNames: GPTMovies, movieResults: movieArray }));
  };
  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center bg-gradient-to-b from-black">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="col-span-9 p-4 m-4"
          ref={searchText}
          type="text"
          placeholder={language[langKey].searchPlaceholder}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg hover:bg-red-400"
          onClick={handleSearchClick}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
