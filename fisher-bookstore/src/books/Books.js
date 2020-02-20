import React, { Component } from "react"; 
import "./Books.css"; 
import BookDisplay  from "./BookDisplay.js"


export default class Books extends Component
{
    constructor(props){
        super(props); 
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design", 
                    author: "Eric Evans", 
                    isbn: "978-0321125217" 
                },
                {
                    id: 2, 
                    title: "Accelerate",
                    author: "Nicole Forsgren", 
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "All The Penuts", 
                    author: "Bob The Builder", 
                    isbn: "978-1278368" 
                },
                {
                    id: 4, 
                    title: "I Love Pizza",
                    author: "Pizza Mia", 
                    isbn: "978-23487203985"
                },
                {
                    id: 5,
                    title: "Water is Wonderful", 
                    author: "Rain Man", 
                    isbn: "978-23874698273" 
                },
                {
                    id: 6, 
                    title: "OMG BOOKS",
                    author: "Lovely Ladys", 
                    isbn: "978-1942788331"
                },
                {
                    id: 7,
                    title: "I Really Do Know", 
                    author: "Im Really Not Sure", 
                    isbn: "978-0321125217" 
                },
                {
                    id: 8, 
                    title: "Some Things Just Arent So",
                    author: "Willy Wonka ", 
                    isbn: "978-1942788331"
                }
            ]
        }
    }
   render () {
    return (
        <div classname = "Home">
            <div className= "lander">
                <h1>Books</h1>
                <BookDisplay books={this.state.books} />
            </div>
        </div>
    )
   }
}