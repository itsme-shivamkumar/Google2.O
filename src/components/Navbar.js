import React from 'react'
import {Link} from 'react-router-dom';
import { Search } from './Search';
const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <nav>
      <Link to='/'>
        <h1>Google2.O</h1>
      </Link>
      <button type='button' onClick={()=>setDarkTheme(!darkTheme)}>Theme: {`${(darkTheme)?"dark 🌚":"light 😎"}`}</button>
      <Search/>
    </nav>
  )
}

export {Navbar};
