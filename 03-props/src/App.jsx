import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="abhishek mishra" age={25} img="https://static.vecteezy.com/system/resources/previews/036/583/710/original/ai-generated-cute-boy-with-a-smile-clip-art-png.png"  />
      
      <Card user="john doe" age={30} img="https://cdn2.vectorstock.com/i/1000x1000/98/56/cute-little-boy-cartoon-vector-21539856.jpg" />
      <Card user="alex smith" age={28} img="https://img.freepik.com/premium-vector/boy-cartoon-character-vector-file_918868-816.jpg?w=740" />
      
    </div>
  )
}

export default App
