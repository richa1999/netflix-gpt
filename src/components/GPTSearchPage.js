import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import {BACKGROUND_IMAGE} from '../utils/constants'

const GPTSearchPage = () => {
  return (
    <div>
      <div>
        <img
          className="absolute -z-10"
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