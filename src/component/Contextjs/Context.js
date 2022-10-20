import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Home from "../Home/Home.js";

// const API_URL=`https://api.weatherapi.com/v1/current.json?key=a09503f14ef34d3b813183738223007&q=mecca&aqi=no`

export const AppProvider = () => {
  const [wheatherData, setWheatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checkStatus, setCheckStatus] = useState(false);
  const [query, setQuery] = useState("Hyderabad");
  const [error, setError] = useState({ show: "false", msg: "" });

  console.log("====>2", wheatherData);
  const getWheather = async () => {
    try {
      const getInfoWyheather = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=a09503f14ef34d3b813183738223007&q=${query}`
      );
      console.log("raw data", getInfoWyheather.status);
      if (getInfoWyheather.status === 200) {
        setCheckStatus(true);
        setWheatherData([getInfoWyheather.data]);
      }
      console.log("api data",getInfoWyheather)
      if (wheatherData === true) {
        setIsLoading(true);
      }
    } catch {}
  };
  

  useEffect(() => {
    setCheckStatus(false);
    let timerOut = setTimeout(() => {
      getWheather();
    }, 800);
    return () => clearTimeout(timerOut);
  }, [query]);

  console.log("status check", checkStatus);
  return (
    <div>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: "750px", height: "50px", borderRadius:"15px" ,position:"absolute",left:"42em",top:"5%"}}
          />
        
          {/* {query===wheatherData?"here is your result" :<h1 style={{color:"red"}}>data is not find</h1>} */}
        </div>
  
                <div style={{position:"absolute",top:"10%",left:"38%"}}>
                            <h1> Search Result For: {query}</h1>
                            <Home data={wheatherData} query={query} checkStatus={checkStatus} />
                </div>
        

      </form>
      
    </div>
  );
};
