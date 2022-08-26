import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import React from 'react';
import Logo from '../img/googleLogo.png';
import { XMarkIcon, MicrophoneIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';



const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) {
      return;
    }
    router.push(`/search?term=${term}`);
  }
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Image 
          src={Logo}
          width={120}
          height={40}
          onClick={() => router.push('/')}
          //pushing rather than replacing since i wanna come back to the page when i need to
          className='cursor-pointer'
        />
        <form className='flex flex-grow border border-gray-200 rounded-full shadow-lg 
          max-w-3xl items-center px-6 py-3 ml-10 mr-5'>

          <input ref={searchInputRef} type="text" className='flex-grow w-full focus:outline-none'/>

          <XMarkIcon className='h-7 text-gray-500 cursor-pointer 
           transition duration-100 transform hover:scale-125 sm:mr-3'
           onClick={() => (searchInputRef.current.value = '')}
          />

          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4
            border-gray-300'
          />

          <MagnifyingGlassIcon className='h-6 text-blue-500 hidden sm:inline-flex'
          />

          <button hidden type='submit' onClick={search}>Search</button>
        </form>
        <Avatar className='right-1' />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default SearchHeader;
