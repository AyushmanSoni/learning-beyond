import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const add = () => {
    if(count+1<=20) setCount(count+1)
  }
  const subtract = () => {
    if(count-1>=0) setCount(count-1)
  }
  return (
    <>
      <h1>My name is Ayushman</h1>
      <p>I m gonna create a counter machine</p>
      <p>the counter value is {count}</p>
      <button
      onClick={add}>increment</button>
      <br />
      <br />
      <button
      onClick={subtract}>decrement</button>
    </>
  )
}

export default App
