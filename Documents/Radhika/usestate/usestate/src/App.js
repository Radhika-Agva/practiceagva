import React,{useState} from 'react'

function App(){
  const [count,setCount] =useState(1)
 // const [theme,setTheme] = useState('blue')

function decrementCount(){
  setCount(prevCount => prevCount-1)
}
function incrementCount(){
  setCount(prevCount => prevCount + 1)
}
return(
  <>
  <button onClick={decrementCount}>-</button>
  <span>{count}</span>
  <button onClick={incrementCount}>+</button>
  </>

)
}
export default App;
