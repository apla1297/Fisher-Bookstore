import React, { Component } from "react"; 
import "./Authors.css"; 
import AuthorDisplay from "./AuthorDisplay"

export default class Authors extends Component
{
    constructor(props){
        super(props); 
        this.state = {
            authors: [
                {
                    id: 1,
                    name: "Mr. Zebra", 
                    book: "Animal House", 
                    img: "https://images.unsplash.com/photo-1526319238109-524eecb9b913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
                },
                {
                    id: 2,
                    name: "Mr. Clam", 
                    book: "Under The Sea", 
                    img: "https://www.barnegatbaypartnership.org/wp-content/uploads/2018/08/Happy-hard-clam-e1533340720452.jpg" 
                },
                {
                    id: 3,
                    name: "Mr. Banana", 
                    book: "Life of Fruit", 
                    img: "https://cdn.pixabay.com/photo/2016/10/27/09/45/banana-1773796_960_720.png" 
                },
                {
                    id: 4,
                    name: "Ms. Magic", 
                    book: "Slight of Hand", 
                    img: "https://previews.123rf.com/images/elnur/elnur1602/elnur160201444/52947151-woman-magician-isolated-on-the-white.jpg" 
                },
                {
                    id: 5,
                    name: "Ms. Wolf", 
                    book: "Howling at the Moon", 
                    img: "https://cdn.instructables.com/FOP/OAO3/IGI9DCMP/FOPOAO3IGI9DCMP.LARGE.jpg?auto=webp&&frame=1" 
                },
                {
                    id: 6,
                    name: "Ms. Rose", 
                    book: "Violets are Blue", 
                    img: "https://thumbs.dreamstime.com/z/cartoon-red-rose-flower-house-plant-pot-happy-design-kids-coloring-book-colouring-page-t-shirt-print-icon-logo-label-119262313.jpg" 
                },
            ]
        }
    }    
    render()
    {
        return (
            <div classname = "Home">
                <div className= "lander">
                    <h1>Authors</h1>
                    <AuthorDisplay authors={this.state.authors} />
                </div>
            </div>
        )
    }

}