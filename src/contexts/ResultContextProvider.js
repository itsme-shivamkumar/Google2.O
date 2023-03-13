import React,{useState,useContext,useEffect, createContext} from 'react'
const ResultContext=createContext();
const baseURL='https://real-time-web-search.p.rapidapi.com/search';

const key=[
    '0da8b1d6e1msh6f44233a015226cp105b57jsndbd1394341d8',//Vaishali
    '6b0e67de86mshd98e315c304c079p13c967jsnf23f2104e8fc',//DevItUp
    'a2472f26e3msh9c0210bd9614032p1c82dcjsn5b02b5e17775',//mttnickevin
    '5703d25591mshc70566f90974bd2p17dc54jsnb1298de4a0a9',//sherlockshivam2.x
    '1ff1c0d13emsh656cba4b5869001p16e3dfjsnb573c547e40f'//shivk
];

export const ResultContextProvider=({children})=>{
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