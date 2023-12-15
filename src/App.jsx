import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 1

  const addValue = () => {
    counter = counter + 1
    console.log("clicked", counter);
  }

  return (
    <>
      <h1>Mastering React.Js</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Increase Value</button>
      <button>Decrease Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App