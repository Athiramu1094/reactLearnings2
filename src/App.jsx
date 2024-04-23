
import './App.css'
import MyButton from './button'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(1)
  const [message, setMessage] = useState('')
  
  

  const user = {
    name: "David",
    age:25,
    result: "Passed"
  }
  function showAlert(){
    alert("you clicked button1")
  }
  
  function add(){
    setCount(count + 1)
  }

  function multiply(){
    setNumber(number * 2)
  }

  function showMessage(){
    setMessage("welcome to our page")
  }

  function remove(){
    setMessage('')
  }

  function message2(){
    setMessage("congratulations!")
  }

  
  
  

  return (
    <>
      <div>
      <h1>hello world</h1>
      <button>hello</button>
      <MyButton />
      <img className='flower' src="/flower.png" alt="" />
      </div>
    <h2>{user.name}</h2>
    <span>{user.age}</span>
    <h3>{user.result}</h3>
    <div className='myButton'>
    <button onClick={showAlert}>alert</button>
      <button onClick={add}>add = {count}</button>
      <div className='multiplyButton'>
      <button onClick={multiply}>button3</button>
      <span>{number}</span>
      </div>
      <button onClick={showMessage}>click here</button>
      <p className='myMessage'>{message}</p>
      <button onClick={remove}>delete</button>
      <button onClick={message2}>final message</button>
      </div>
    
    </>
  )
}

export default App
