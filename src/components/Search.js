import React, { useEffect, useState } from 'react'
import {useResultContext} from '../contexts/ResultContextProvider';
import {useDebounce} from 'use-debounce';

export const Search = () => {
  const {setSearchTerm} = useResultContext()
  const [text,setText]=useState("");
  const [searchIcon,setSearchIcon]=useState("⌕")
  const [debouncedValue]=useDebounce(text,300);
  useEffect(()=>{
    if(debouncedValue) setText(debouncedValue);
  },[debouncedValue])
  useEffect(()=>{
    if(searchIcon==="x")setSearchTerm(text);
    else setSearchTerm("");
  },[searchIcon])
  
  const handleKeys=(e)=>{
    if(e.key==='Enter'){
      setSearchTerm(text);
      setSearchIcon("x");
    }
    window.removeEventListener("keypress",handleKeys);
  }
  useEffect(()=>{
    window.addEventListener("keypress",handleKeys);
  },[text])
  return (
    <div className="relative ml-4 sm:ml-0 mt-10">
      <input value={text} 
              type="type" 
              className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none pt-6 pb-6 pl-6 pr-14 text-black hover:shadow-lg"
              placeholder="Enter your search here"
              onChange={(e)=>{
                setText(e.target.value)
              }}
      />
      
        <button type='button' className="relative right-10 top-0.5 text-2xl text-gray-500"
        onClick={()=>{
          if(searchIcon==="x")setText("");
          if(text)setSearchIcon(searchIcon==="x"?"⌕":"x")
        }}>{searchIcon}</button>
    </div>
  )
}