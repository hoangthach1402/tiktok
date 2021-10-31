import { useState, useEffect } from 'react'

function Content() {
  const tabs = ['posts', 'albums', 'comments', 'users']
  const [type, setType] = useState('posts')
  const [datas, setDatas] = useState([])
  const [isShowTop, setIsShopTop] = useState(false)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((data) => data.json())
      .then((data) => setDatas(data))
  }, [type])

  useEffect(() => {
    const handleMove = () => {
      setIsShopTop(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleMove)
    // clean up
    return () => {
      window.removeEventListener('scroll', handleMove)
    }
  }, [])
  //   console.log('render')
  return (
    <div>
      {isShowTop && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          style={{ position: 'fixed', right: 20, bottom: 20 }}
        >
          Move to top
        </button>
      )}
      {tabs.map((tab) => (
        <button
          style={
            type === tab ? { backgroundColor: 'black', color: 'white' } : {}
          }
          onClick={() => setType(tab)}
          key={tab}
        >
          {tab}
        </button>
      ))}
      <ul>
        {datas.map((data) => (
          <li key={data.id}>{data.title || data.name}</li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setIsShow(!isShow)}>toggle</button>
      {isShow && <Content />}
    </div>
  )
}

export default App
