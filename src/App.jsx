import { useState } from 'react'

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
      <center>
        <h1>Mastering React.js</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={increaseValue} >Increase Value</button>
        <button onClick={decreaseValue} >Decrease Value</button>
        
        <p>Description: {counter}</p>
      </center>
    </>
  )
}

export default App