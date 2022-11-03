import React from "react";
import './App.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="agva">AgVa Healthcare</div>
            <h1>Welcome</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Models</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Work With Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    )
}
export default Navbar