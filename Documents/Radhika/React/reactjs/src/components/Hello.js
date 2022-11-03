import React from 'react';

const Hello = () =>{
    //Component using JSX
   // return(
     //   <div>
       //     <h1>Hello!</h1>
        //</div>
    //)
    //Without using JSX
return React.createElement(
    'div',
    {id:'hello', className:"Dummyclass"},
    React.createElement('h1',null,'Hello Radhika')
    ) 
}
export default Hello