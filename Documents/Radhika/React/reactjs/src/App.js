import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import { Component } from 'react';

class App extends Component {
  //render() {
    //return(
      //Props as an attribute in functional component
   /* <div className="App">
    <Greet name="Sridham" sirName="Iyengar">
      <p>This is Children Props</p>
    </Greet>
    <Greet name = "Radhika" sirName="Iyengar">
      <button>action</button>
    </Greet>
    <Greet name = "Shruti" sirName="Pathak"/>
    <Greet name = "Kritish" sirName="Sharma"/>
    
   </div>
 );*/
 //Props as an attribute in Class Component
 /*render(){
  return(
<div className="App">
<Welcome name="Sridham" sirName="Iyengar"/>
 <Welcome name = "Radhika" sirName="Iyengar"/>
 <Welcome name = "Kritish" sirName="Sharma"/>
 </div>
  )
 }
  }*/
  //Component State
  render(){
    return(
      <div className='App'>
        <Message/>
      </div>
    )
  }
}

export default App;
