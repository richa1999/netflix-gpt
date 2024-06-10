import React from 'react'
import { useSelector } from 'react-redux'
import language from '../utils/languageConstants';

const GPTSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center bg-gradient-to-b from-black'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
        <input className='col-span-9 p-4 m-4' type="text" placeholder={language[langKey].searchPlaceholder} />
        <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg'>{language[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar