import React,{useState} from 'react'
import {Footer} from './components/Footer';
import {Navbar} from './components/Navbar';
import {Routes} from './components/Routes';
import {Link} from 'react-router-dom';
import './index.css';
const App = () => {

    // const systemPrefTheme=window.matchMedia("(prefers-color-scheme: dark)")?'dark':'light';
    // console.log("system theme is ",systemPrefTheme);

    const [darkTheme,setDarkTheme]=useState(false);
    
  return (
    <div>
        <div>
            <Navbar/>
            <Routes/>
            <Footer/>
        </div>
    </div>
  )
}

export default App;
