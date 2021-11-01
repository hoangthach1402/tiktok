import { useRef, useState, useEffect, useCallback } from 'react'
import Content from './Content'
function App() {
  const [count, setCount] = useState(0)
  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])
  return (
    <div className="App">
      <h3>Count :{count}</h3>
      <Content onIncrease={handleIncrease} />
    </div>
  )
}

export default App


import { memo } from 'react'
function Content({ onIncrease }) {
  console.log('re-render')
  return (
    <>
      <button onClick={onIncrease}>Increase</button>

      <h3>hello anh em</h3>
    </>
  )
}
export default memo(Content)
