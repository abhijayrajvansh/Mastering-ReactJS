import React from 'react'
import {useState} from 'react'

const Counter = () => {

  let [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1) // this will send values in bundle 
    setCounter(counter + 1) 
    setCounter(counter + 1) 
    setCounter(counter + 1) 
    setCounter(counter + 1) // all this 5 commands will have just one effect
  }
  
  const decrement = () => {
    setCounter(counter - 1)
  }

  const incrementx5 = () => {
    setCounter(prevCounter => prevCounter + 1) // this have individual action parameters
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1) // in setCounter we get a call back with last updated state
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const decrementx5 = () => {
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
  }

  const zero = () => {
    setCounter(counter = 0)
  }

  return (
    <>
      <div className='font-bold font text-4xl mb-10'>
        CounterValue: {counter}
      </div>

      <div className='flex cursor-pointer mb-5'>

        <div onClick={increment}
        className='flex-1 bg-black text-white rounded-sm m-1'>
          Increase
        </div>
        
        <div onClick={decrement}
        className='flex-1  bg-black text-white rounded-sm m-1'>
          Decrease
        </div>

      </div>

      <div className='flex cursor-pointer'>

        <div onClick={incrementx5}
        className='flex-1  bg-black text-white rounded-sm m-1'>
          IncreaseX5
        </div>

        <div onClick={decrementx5}
        className='flex-1  bg-black text-white rounded-sm m-1'>
          DecreaseX5
        </div>

      </div>

      <div onClick={zero}
      className='mt-5 bg-green-600 text-white rounded-sm font-bold cursor-pointer'>
        Zero
      </div>

    </>
  )
}

export default Counter