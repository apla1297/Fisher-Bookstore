import React, { useEffect, useState } from "react"; 
import "./Authors.css"; 
import AuthorDisplay  from "./AuthorDisplay.js"


export default function Authors(props)
{
    const[data,setData] = useState([]); 
    
    useEffect(()=>{
        fetch('https://localhost:5001/api/authors')
        .then(response=>response.json())
        .then(data => setData(data)); 
    },[]);

    return(
        <div className = "Home">
            <div className= "lander">
                <h1>Authors</h1>
                <AuthorDisplay authors={data} />
            </div>
        </div>
    ); 

}