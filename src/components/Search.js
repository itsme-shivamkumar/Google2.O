import React, { useEffect, useState } from 'react'
import {useResultContext} from '../contexts/ResultContextProvider';
import {useDebounce} from 'use-debounce';

export const Search = () => {
  const {setSearchTerm} = useResultContext()
  const [text,setText]=useState("");
  const [searchIcon,setSearchIcon]=useState("🔎")
  const [debouncedValue]=useDebounce(text,3000);
  useEffect(()=>{
    if(debouncedValue) setText(debouncedValue);
  },[debouncedValue])
  useEffect(()=>{
    if(searchIcon==="❌")setSearchTerm(text);
    else setSearchTerm("");
  },[searchIcon])
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:mt-10 mt-3">
      <input value={text} 
              type="type" 
              className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
              placeholder="Enter your search here"
              onChange={(e)=>{
                setText(e.target.value)
              }}
      />
      
        <button type='button' className="absolute top-1.5 text-2xl text-gray-500"
        onClick={()=>{
          if(searchIcon==="❌")setText("");
          setSearchIcon(searchIcon==="❌"?"🔎":"❌")
        }}>{searchIcon}</button>
    </div>
  )
};