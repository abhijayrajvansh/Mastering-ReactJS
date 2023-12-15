import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 1 // javascript practice doesn't allow here to update variable value in UI

  const [counter, setCounter] = useState(1) // const or let: useState hooks me fark nhi parta hai
  // type [variableName, actionName] = useState.hook(defaultValue)

  const increaseValue = () => {
    setCounter(counter + 1)
    console.log("clicked", counter);
  }

  const decreaseValue = () => {
    setCounter(counter - 1)
    console.log("clicked", counter)
  }

  return (
    <>
      <h1>Mastering React.Js</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increaseValue} >Increase Value</button>
      <button onClick={decreaseValue} >Decrease Value</button>
      
      <p>footer: {counter}</p>
    </>
  )
}

export default App