import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies  from "universal-cookie";
function Home(){
    const navigate = useNavigate();
    const cookies = new Cookies();
    console.log(cookies.get('Token'));

    useEffect(()=>{
        if(!cookies.get('Token')){
            navigate('/');
        }
    },  []);
    return(
        <div className='home'>
            <h1>Welcome to Home Page</h1>
        </div>
    )
}
export default Home;