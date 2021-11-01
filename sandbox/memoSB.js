import { useRef, useState, useEffect } from 'react'
import Content from './Content'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Content count={count} />
    </div>
  )
}

export default App

import { memo } from 'react'
function Content() {
  console.log('re-render')
  return (
    <div>
      <h3>Content</h3>
    </div>
  )
}
export default memo(Content)
