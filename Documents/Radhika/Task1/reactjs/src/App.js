import './App.css';
import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import {product} from './Component/NavBarData';


function App(){

  const [cbData, setCbData] = useState([]);

  const cbFun = (data) => {
    setCbData(data);
  }

  return(
    <div className='App'>
      <Navbar cbFun={cbFun} data={product}></Navbar>
      <Main data={cbData} />
    </div>
  );
}
export default App;

