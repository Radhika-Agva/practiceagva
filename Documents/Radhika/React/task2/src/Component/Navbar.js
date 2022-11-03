import React from 'react'
import '../App.css'

//Home Page
const Navbar=({cbFun,data})=>{
    const trigger =(users) =>{
        cbFun(users)
    }
        return(
            <div className='nav'>
                <h1>Users</h1>
              <ul>
                {data.map(value=>
                 <li key={value.id} onClick={()=>trigger(value)}>
                        {value.name}
                    </li>
                )}
            </ul>
            </div>
        );
    }
    export default Navbar;