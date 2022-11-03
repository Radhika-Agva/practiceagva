import React from "react";
import { Component } from "react";
import Navbar from "./Navbar";

const Main=(props)=>{
    return(
        <div className="main1">
            <h1>{props.data.id}.{props.data.title}</h1>
            <p> {props.data.title}</p>  
            <p> {props.data.description}</p>  
            <p> {"$"+props.data.price}</p>  
            <p> {"$"+props.data.discountPercentage}</p>  
            <p> {props.data.rating}</p>  
            <p> {props.data.stock}</p>  
            <p> {props.data.brand}</p>  
            <p> {props.data.category}</p>  
            <p> {props.data.thumbnail}</p>  


        </div>
    )
}
export default Main; 