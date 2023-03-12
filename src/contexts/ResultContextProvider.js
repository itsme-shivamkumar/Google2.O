import React,{useState,useContext,useEffect, createContext} from 'react'
const ResultContext=createContext();
const baseURL='https://real-time-web-search.p.rapidapi.com/search';

export const ResultContextProvider=({children})=>{
    const [result,setResult]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [searchTerm,setSearchTerm]=useState("");


    const getResults= async (term)=>{
        console.log("term is ",term);
        setSearchTerm(term);
        setIsLoading(true);
        console.log("search term is",searchTerm," and term is ",term);
        const response=await fetch(`${baseURL}?q=${term}`,{
            // API - 1
            method: 'GET',
            url: baseURL,
            params: {
                q: term,
                location_name: 'London,Ontario,Canada',
                location_parameters_auto: 'true'
            },
            headers: {
                'X-RapidAPI-Key': '6b0e67de86mshd98e315c304c079p13c967jsnf23f2104e8fc',
                'X-RapidAPI-Host': 'g-search.p.rapidapi.com'
            }
            // till here
            // API-2
            // method: 'GET',
            // url: baseURL,
            // params: {q: term, limit: '10'},
            // headers: {
            //     'X-RapidAPI-Key': '6b0e67de86mshd98e315c304c079p13c967jsnf23f2104e8fc',
            //     'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
            // }
            // till here
        });
        const data=await response.json();
        console.log("data is ",data.data.organic_results);
        setResult(data.data.organic_results);
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{result,isLoading,getResults,searchTerm,setSearchTerm}}>
            {children};
        </ResultContext.Provider>
    );
}
export const useResultContext=()=>useContext(ResultContext);