import React from 'react'
import { useState } from 'react'
const Counter = () => {
    let [count, setCount] = useState(15)
    
      const add = () => {
        if(count+1<=20) setCount(count+1)
      }
      const subtract = () => {
        if(count-1>=0) setCount(count-1)
      }
  return (
    <>
    <h3>My name is Ayushman</h3>
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

export default Counter