import { useState } from 'react'
import './App.css'

function App() {
  //setCounter-method
  //whenever is counter variable, setCounter will update it
  let [counter,setCounter]=useState(10);

  //let counter=15;
  const addValue=()=>{
    if(counter<20)
    {
      setCounter(counter+1);
    }
    else{
      setCounter(counter=0);
    }
    
  }
  const removeValue=()=>{
    if(counter>0)
    {
      setCounter(counter-1);
    }
    else{
      setCounter(counter=0);
    }
  }

  return (
    <>
      <h1>Hello Anushka!</h1>
      <h2>Counter Value: {counter}</h2>
      <p>{counter}</p>
      <button
      onClick={addValue}>Add Value</button>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
