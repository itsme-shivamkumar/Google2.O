import React,{useEffect}from 'react'
import { useLocation } from 'react-router-dom';
import {Loading} from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider';
export const Results = () => {
    const {result,getResults,isLoading,searchTerm} = useResultContext();
    const location = useLocation();
    // useEffect(()=>{
    //     getResults("how to make a website")
    //     console.log(location.pathname,result);
    // },[]);
        console.log(result)
            return(
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {result?.result?.map(({url,title,desc},index)=>(
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={url} target="_blank" ref="norefferer"></a>
                                <p className="text-sm">
                                    {url.length>30?url.substring(0,30):url}
                                </p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                    <br/>
                                   
                                    <span>desc is: {desc}</span>
                                    <br/>
                                    
                                </p>
                            
                        </div>
                    ))}
                </div>
            )

};
