import React from 'react';
import ProPic from '../img/react.svg'
import Image from 'next/image'


const Avatar = () => {
  return (
    <Image 
      src={ProPic}
      // width={150}
      // height={50}
      className='h-10 rounded-full cursor-pointer
      transition duration-150 transform hover:scale-110'
    />
  );
}

export default Avatar;
