import React from 'react';

//function Greet(){
   // return <h1>Hello Radhika</h1>
//}

//Same using arrow functions
const Greet = (props) =>{
   console.log(props)
  return (
   <div>
  <h1>Hello! {props.name} {props.sirName}</h1>
  {props.children}
  </div>
  
  )
} 

export default Greet
