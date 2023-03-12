import React,{useState} from 'react'
import {Footer} from './components/Footer';
import {Navbar} from './components/Navbar';
import {Routes} from './components/Routes';
import './index.css';
const App = () => {

    // const systemPrefTheme=window.matchMedia("(prefers-color-scheme: dark)")?'dark':'light';
    // console.log("system theme is ",systemPrefTheme);

    const [darkTheme,setDarkTheme]=useState(false);
    
  return (
    <div className={darkTheme?'dark':''}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Routes/>
            <Footer/>
        </div>
    </div>
  )
}

export default App;
