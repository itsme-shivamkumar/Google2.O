import React,{useEffect, useState} from 'react'
import {Footer} from './components/Footer';
import {Navbar} from './components/Navbar';
import {Routes} from './components/Routes';
import { useResultContext } from './contexts/ResultContextProvider';
import './index.css';
const App = () => {

    // const systemPrefTheme=window.matchMedia("(prefers-color-scheme: dark)")?'dark':'light';
    // console.log("system theme is ",systemPrefTheme);
    const {result,isLoading} =useResultContext();
    const [darkTheme,setDarkTheme]=useState(false);
    const [imgStatus,setImgStatus]=useState(!((result.length===0&&!isLoading))?"hidden":"absolute w-screen h-screen object-cover")
    useEffect(()=>{
      setImgStatus(!(!isLoading&&result.length==0)?"hidden":"absolute w-screen h-screen object-cover")
    },[result,isLoading])
  return (
    <div className={darkTheme?'dark':''}>
        
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-[96vh] grid grid-flow-row content-between">
        <img className={imgStatus} src='https://source.unsplash.com/random' />
            <Navbar className="order-first" darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Routes/>
            <Footer className="self-end" />
        </div>
    </div>
  )
}

export default App
