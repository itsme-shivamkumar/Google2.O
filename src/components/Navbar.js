import React from 'react'
import {Link} from 'react-router-dom';
import '../index.css';

const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <nav>
      <Link to='/'>
        <h1>Google2.O</h1>
      </Link>
      <button type='button' onClick={()=>setDarkTheme(!darkTheme)}>Theme: {`${(darkTheme)?"dark 🌚":"light 😎"}`}</button>
    </nav>
  )
}

export {Navbar};
