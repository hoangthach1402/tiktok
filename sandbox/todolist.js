import './styles.css'
import { useState } from 'react'
export default function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(() => {
    const local = JSON.parse(localStorage.getItem('jobs'))
    return local ?? []
  })

  const handleSubmit = () => {
    setTodos((prev) => {
      const newTodos = [...prev, todo]
      setTodo('')
      localStorage.setItem('jobs', JSON.stringify(newTodos))
      return newTodos
    })
  }
  return (
    <div className="App">
      <input value={todo} onChange={(e) => setTodo([e.target.value])} />

      <button onClick={handleSubmit}>Add</button>
      <div>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
