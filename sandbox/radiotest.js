import './styles.css'
import { useState } from 'react'
export default function App() {
  const courses = [
    { id: 1, name: 'html' },
    { id: 2, name: 'javascript' },
    {
      id: 3,
      name: 'node js',
    },
  ]
  const [checked, setChecked] = useState()
  const handleSubmit = () => {
    console.log(checked)
  }

  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            onChange={() => setChecked(course.id)}
            checked={course.id === checked}
            value={course.id}
            type="radio"
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}
