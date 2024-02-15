import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseVal = () => {
    setCount(count + 1)
  }

  const decreaseVal = () => {
    if (count <= 0) {
      setCount(0)
      alert("Counter decrease limit of 0")
    } else {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>React Counter</h1>
      <h3> Count is {count}</h3>
      <button onClick={increaseVal}>
          Increase
      </button>
      <br />
      <br />
      <button onClick={decreaseVal}>
          Decrease
      </button>
      <p className="read-the-docs">
        Click on the buttons to see how counter reacts
      </p>
    </>
  )
}

export default App
