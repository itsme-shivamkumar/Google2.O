import React from 'react'
import {useResultContext} from '../contexts/ResultContextProvider';
const Footer = () => {
  const {result}=useResultContext();
  console.log(result);
  return (
    <>
    <div className={`z-30 text-white min-h-[60px] max-h-[60px] p-4 relative -bottom-7 text-center bg-black`}>
      © Made by Shivam Kumar with ❤️
    </div>
    </>    
  )
}

export {Footer}
