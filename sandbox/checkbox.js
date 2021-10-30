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
  const [checked, setChecked] = useState([])
  const handleSubmit = () => {
    console.log(checked)
  }
  const handleChange = (id) => {
    let isChecked = checked.includes(id)
    setChecked((prev) => {
      if (isChecked) {
        return checked.filter((item) => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }
  // console.log(checked.includes(1));
  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            onChange={() => handleChange(course.id)}
            checked={checked.includes(course.id)}
            value={course.id}
            type="checkbox"
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}
