import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card userName={"Abhijay Rajvansh"} 
      dsct={'This is a sample description of and meta data for 1st card'} 
      canvasLink={'https://avatars.githubusercontent.com/u/82618814?v=4'}
      profileLink={'https://github.com/abhijayrajvansh'}
      />

      <Card userName={"Keshav Agarwal"} 
      dsct={'This is a sample description of and meta data for 2st card'} 
      canvasLink={'https://avatars.githubusercontent.com/u/73575539?v=4'}
      profileLink={'https://github.com/KeshavAgarwal-422'}
      />
    </>
  )
}

export default App
