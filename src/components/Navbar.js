import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { Search } from './Search';
import img from '../img/googlelogo.png';
const Navbar = ({darkTheme, setDarkTheme}) => {
  const [logoBg,setLogoBg]=useState((!darkTheme)?"bg-slate-900 text-white font-medium":"text-black font-bold");
  useEffect(()=>{
    setLogoBg((!darkTheme)?"bg-slate-900 text-white font-medium":" text-white font-bold")
  },[darkTheme])
  return (
    <nav className='grid sm:justify-center justify-start'>
      <Link to='/'>
        <div className='sm:relative sm:right-6 top-6 grid justify-start sm:justify-center' >
        <h1 className="text-4xl sm:pl-[4.2rem] sm:text-center font-sans p-6 "><span  className={`relative ${logoBg} pl-16 pb-[0.8rem] p-2 pr-5 rounded-full`} >Google2.O</span></h1>
        <p className='grid justify-center h-0' ><img src={img} alt="google icon" className={`w-10 relative -top-[3.8rem] right-[5.7rem] sm:right-[4.5rem]`}/></p>

        </div>
      </Link>
      {/* <div className='min-h-[5px] bg-white'></div> */}
      <button className="absolute right-0 sm:mr-6 p-2 ml-6 mr-2 mt-6 font-semibold text-black bg-white rounded-full" type='button' onClick={()=>setDarkTheme(!darkTheme)}>{`${(darkTheme)?"Night 🌚":"Day 😎"}`}</button>
      < Search/>
    </nav>
  )
}

export {Navbar}
