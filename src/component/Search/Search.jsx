import React,{useState} from 'react';

const Search = () => {
    const [query,setQuery]=useState("")
    return (
        <div>
            <input type="text" onChange={(e)=>setQuery(e.target.value)}/>
            
        </div>
    );
};

export default Search;