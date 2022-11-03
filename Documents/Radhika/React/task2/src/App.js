import { useEffect, useState } from 'react';
import './App.css';
import Main from './Component/Main';
import Navbar from './Component/Navbar';

function App() {
  const[users,setUsers] = useState([]);

    const apidata=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) =>{
          console.log(json) 
          setUsers(json) }
        )
    };

 useEffect(() => {
  apidata();
 }, [])
 
  const[cbData,setCbData] = useState([]);
  const cbFun =(cbData) =>{
    setCbData(cbData);
  }


  return (
    <div>
      <Navbar cbFun={cbFun} data={users}></Navbar>
      <Main data={cbData}></Main>
    </div>
  );
}

export default App;
