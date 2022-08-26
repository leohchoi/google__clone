import React from 'react';
import { useState } from 'react'
import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/solid'
import Logo from './googleLogo.png'

// flex grow is where if there is more room in that entire width of the page, take it up

const HomeBody = (props) => {
  const [search, setSearch] = useState();

  function handleChange(event) {
    console.log(event)
    setSearch(event.target.value);
  }
  return (
    <form className='flex flex-col items-center justify-center flex-grow w-4/5'>
      <img 
        loading='lazy'
        src={Logo} 
        alt="google logo" 
        className='logo'
      />

      <div className='flex w-full mt-5 hover:shadow-lg 
       focus-within:shadow-lg max-w-md rounded-full border border-gray-200
       px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
        <MagnifyingGlassIcon className='h-5 mr-3 text-gray-500'/>
        <input type="text" name='searchBar' value={search} className='flex-grow focus:outline-none' 
         onChange={(event) => handleChange(event)}/>
        <MicrophoneIcon className='h-5'/>
      </div>

      <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8
       sm:space-y-0 sm:flex-row sm:space-x-4'>
        <button type='submit' onClick={(event) => props.search(event, search)} className='btn'>
          Google Search
        </button>

        <button onClick={(event) => props.search(event)} className='btn'>
          I'm Feeling Lucky
        </button>
      </div>
    </form>
  )
}

export default HomeBody;

