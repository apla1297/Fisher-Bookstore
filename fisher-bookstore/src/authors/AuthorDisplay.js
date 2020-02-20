import React from "react"; 
import { AuthorCard } from "./AuthorCard"; 
import {CardColumns} from "react-bootstrap"; 

export default function BookDisplay(props){
    return(
        <div className="dispaly">
            <h3>Authors</h3>
            <CardColumns>
                {props.authors.map(a => (
                    <AuthorCard author={a} key={a.id}/>
                ))}
            </CardColumns>
        </div>
    );
}