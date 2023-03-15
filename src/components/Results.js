import React,{useEffect, useRef}from 'react'
import {Loading} from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider';
export const Results = () => {
    const {result,getResults,isLoading,searchTerm,err} = useResultContext();
    // API CALL
    const handleRetry=useRef(false);
    useEffect(()=>{
        if(searchTerm)getResults(searchTerm);
    },[searchTerm]);
    useEffect(()=>{
        if(handleRetry.current===true)if(searchTerm)getResults(searchTerm);
        handleRetry.current=false;
    },[handleRetry])

          if(isLoading)return <Loading/>
          else 
            return(
                <div className=" flex flex-wrap justify-between space-y-6 p-4 sm:px-56">
                    {(result.length>0)?result.map(({url,title,snippet,domain},index)=>
                    {
                        return(<div key={index} className="md:w-2/5 w-full mt-4 mx-8 sm:mx-0">
                            <a href={url} target="_blank" rel="noreferrer" >
                                
                                <p className=" max-h-35 text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                    <br/>
                                   
                                    <span className=' text-slate-500 dark:text-slate-300 text-xs sm:text-sm md:text-md lg:text-lg'>{snippet}</span>
                                    <br/>
                                    
                                </p>
                            </a>
                            <p>{domain}</p>
                        </div>)
                    }):(
                      <>
                      {(err)?<div className="z-100"><h1 className="m-5 font-serif font-bold">Error Occured: {err}
                      <button className='bg-black text-white p-3 rounded-full w-full ' type='button' onClick={handleRetry.current=true}>
                        Retry this search</button></h1></div>:<><div></div></>}</>)}
                </div>
            )
}
