import React from 'react';
import Avatar from './Avatar';


// import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'


const Nav = () => {
  return (
    <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
      {/* right */}
      <div className='flex space-x-4 items-center'>
        <p className='link'>About</p>
        <p className='link'>Store</p>
      </div>

      {/* left */}
      <div className='flex space-x-4 items-center'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <Avatar />
      </div>
    </header>
  );
}

export default Nav;
