import React,{useEffect, useState}from 'react'
import { useLocation } from 'react-router-dom';
import {Loading} from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider';
export const Results = () => {
    const {result,getResults,isLoading,searchTerm,err,setSearchTerm} = useResultContext();
    const location = useLocation();
    // API CALL

    useEffect(()=>{
        if(location.pathname==='/search'&& searchTerm)getResults(searchTerm);
    },[searchTerm]);


          if(isLoading)return <Loading/>
          else 
            return(
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {(result.length>0)?result.map(({url,title,snippet,domain,position},index)=>
                    {
                        return(<div key={index} className="md:w-2/5 w-full">
                            <a href={url} target="_blank" rel="noreferrer" >
                                <p className="text-sm">
                                </p>
                                <p>Result: {position}</p>
                                <p>Domain: {domain}</p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                    <br/>
                                   
                                    <span>desc is: {snippet.slice(0,40)}</span>
                                    <br/>
                                    
                                </p>
                            </a>
                        </div>)
                    }):(
                      <>
                      {(err)?<><h1>Error Occured: {err}</h1></>:<><div className='min-h-screen'></div></>}</>)}
                </div>
            )
};
