import React,{useState,useContext, createContext} from 'react'
const ResultContext=createContext();
const baseURL='https://real-time-web-search.p.rapidapi.com/search';

const key=[
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_1,
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_2,
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_3,
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_4,
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_5,
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_6,
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_7,
    process.env.REACT_APP_REALTIME_WEB_SEARCH_API_KEY_8
];

export const ResultContextProvider=({children})=>{
    const [result,setResult]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [searchTerm,setSearchTerm]=useState("");
    const [err,setErr]=useState("");
    
    const getResults= async (term)=>{
        setIsLoading(true);
        const response=await fetch(`${baseURL}?q=${searchTerm}`,{
            method: 'GET',
            url: baseURL,
            params: {q: searchTerm, limit: '10'},
            headers: {
                'X-RapidAPI-Key': key[Math.round((key.length)*(Math.random()))],
                'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
            }
        });
        try{
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