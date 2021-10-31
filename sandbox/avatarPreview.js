import { file } from '@babel/types'
import { useState, useEffect } from 'react'

function Content() {
  const [avatar, setAvatar] = useState()
  useEffect(() => {
    return () => {
      console.log('unmount')
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])
  const handleChange = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
  }
  return (
    <div>
      <input type="file" onChange={handleChange} />
      {avatar && <img src={avatar.preview} width="80%"></img>}
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
