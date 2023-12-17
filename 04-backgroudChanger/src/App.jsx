import React, { useState } from 'react'

const App = () => {

  const [wall, setWall] = useState("white")

  return (
    <>

      {/* Main Canvas */}
      <div className='w-full h-screen' style={{backgroundColor: wall}}>
        <div className='flex justify-center'>
          <div className='flex text-3xl text-center mt-40'>
            Choose from the taskbar to change the background color of the canvas. <br />  
            This mini project deals with the concept of callback function and tailwindcss styling.</div>
        </div>
      </div>

      {/* Navigation Area */}
      <div className='flex justify-center'>
        <div className='flex flex-wrap fixed bottom-12 justify-evenly bg-blue-100 rounded-xl p-4 shadow-xl gap-5'>

          <div onClick={() => setWall("red")} className='flex flex-wrap shadow-xl bg-red-500 px-5 py-2 rounded cursor-pointer'>
            Red
          </div>

          <div onClick={() => setWall("green")} className='flex flex-wrap shadow-xl bg-green-500 px-5 py-2 rounded cursor-pointer'>
            Green
          </div>

          <div onClick={() => setWall('yellow')} className='flex flex-wrap shadow-xl bg-yellow-300 px-5 py-2 rounded cursor-pointer'>
            Yellow
          </div>

          <div onClick={() => setWall('#3B82F6')} className='flex flex-wrap shadow-xl bg-blue-500 px-5 py-2 rounded cursor-pointer'>
            Blue
          </div>

          <div onClick={() => setWall('purple')} className='flex flex-wrap shadow-xl bg-purple-600 px-5 py-2 rounded cursor-pointer text-white'>
            Purple
          </div>

          <div onClick={() => setWall('orange')} className='flex flex-wrap shadow-xl bg-orange-400 px-5 py-2 rounded cursor-pointer text-white'>
            Orange
          </div>

          <div onClick={() => setWall('white')} className='flex flex-wrap shadow-xl bg-white-100 px-5 py-2 rounded cursor-pointer text-black'>
            white
          </div>

          <div onClick={() => setWall('black')} className='flex flex-wrap shadow-xl bg-black px-5 py-2 rounded cursor-pointer text-white'>
            black
          </div>

        </div>
      </div>
      
    </>
  )
}
0
export default App