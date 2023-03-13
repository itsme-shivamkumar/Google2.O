import React,{useState,useContext,useEffect, createContext} from 'react'
const ResultContext=createContext();
const baseURL='https://real-time-web-search.p.rapidapi.com/search';

const key=[
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_1,
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_2,
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_3,
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_4,
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_5
];

export const ResultContextProvider=({children})=>{
    console.log(key)
    const [result,setResult]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [searchTerm,setSearchTerm]=useState("");
    const [err,setErr]=useState("");
    const getResults= async (term)=>{
        setSearchTerm(term);
        setIsLoading(true);
        console.log("search term is",searchTerm," and term is ",term);
        const response=await fetch(`${baseURL}?q=${term}`,{

            // API-2
            method: 'GET',
            url: baseURL,
            params: {q: term, limit: '10'},
            headers: {
                'X-RapidAPI-Key': key[Math.round((key.length)*(Math.random()))],/* DevItUp */
                'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
            }
            // till here
        });
        try{
            console.log("key is ",key)
            const data=await response.json();
            if(data.data)setResult(data.data);
            else{
                setErr(data.message);
            };
        }
        catch(error){
            setErr(error);
        }
        
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{err,result,isLoading,getResults,searchTerm,setSearchTerm}}>
            {children};
        </ResultContext.Provider>
    );
}
export const useResultContext=()=>useContext(ResultContext);

// API - 1
            // method: 'GET',
            // url: baseURL,
            // params: {
            //     q: term,
            //     location_name: 'London,Ontario,Canada',
            //     location_parameters_auto: 'true'
            // },
            // headers: {
            //     'X-RapidAPI-Key': '6b0e67de86mshd98e315c304c079p13c967jsnf23f2104e8fc',
            //     'X-RapidAPI-Host': 'g-search.p.rapidapi.com'
            // }
            // till here