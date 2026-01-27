import React from 'react'
import { useState } from 'react'

 
const App = () => {
  const [num, setNum] = useState(0)
    
function increase() {
  setNum(num+1)
}
function decrease() {
  setNum(num-1)
}
function increaseBy5() {
  setNum(num+5)
}
  return (
    <div className="App">
   
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={increaseBy5}>jump by 5</button>
    </div>
  )
}

export default App
