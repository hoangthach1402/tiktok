import { useRef, useState, useEffect } from 'react'

function Content() {
  const [count, setCount] = useState(60)
  let timeRef = useRef()
  console.log(timeRef)
  useEffect(() => {}, [count])
  const handleStart = () => {
    timeRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1)
      // console.log(count)
    }, 1000)
  }

  const handleStop = () => {
    console.log('stop')
    clearInterval(timeRef.current)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Content />
    </div>
  )
}

export default App
