import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import {BACKGROUND_IMAGE} from '../utils/constants'

const GPTSearchPage = () => {
  return (
    <div>
      <div>
        <img
          className="fixed -z-10 w-screen h-screen object-cover"
          src={BACKGROUND_IMAGE}
          alt="bg"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearchPage