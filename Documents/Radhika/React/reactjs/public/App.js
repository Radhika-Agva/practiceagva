import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import { Component } from 'react';

class App extends Component {
  render() {
    return(
    <div className="App">
    <Hello></Hello>
   </div>
 );
  }
}

export default App;
