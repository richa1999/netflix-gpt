import React from 'react'
import Header from './Header'
import { useSelector } from "react-redux";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearchPage from './GPTSearchPage';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? <GPTSearchPage /> : 
      <>
      <MainContainer />
      <SecondaryContainer />
  </>}
    </div>
  )
}

export default Browse