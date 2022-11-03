import React,{Component} from "react";
import { product } from "./NavBarData";

const Navbar = (props) =>{

    const trigger = (data) => {
        props.cbFun(data)
    }

    return(
        <div className="n1">
            <h1>Product List</h1>
            <ul>
                    {props.data.map((value)=>{
                    return(
                        <li onClick={() => trigger(value)}>
                        {value.title}
                        </li>
                    )
                    })
                }
                
            </ul>
        </div>
    )
}
export default Navbar
