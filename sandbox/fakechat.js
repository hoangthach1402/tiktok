import { useState, useEffect } from 'react'
const lessons = [
  { id: 1, name: 'html course' },
  { id: 2, name: 'react course' },
  { id: 3, name: 'node js course' },
]
function Content() {
  const [lessonId, setLessonId] = useState(1)
  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail)
    }
    window.addEventListener(`lesson-${lessonId}`, handleComment)
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment)
    }
  }, [lessonId])
  return (
    <div>
      <h2>Content</h2>
      <ul>
        {lessons.map((lesson) => (
          <li
            style={{ color: lessonId === lesson.id ? 'red' : '#333' }}
            onClick={() => setLessonId(lesson.id)}
            key={lesson.id}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  const [isShow, setIsShow] = useState(false)
  const handleToggle = () => {
    setIsShow(!isShow)
  }
  console.log(isShow)
  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle</button>
      {isShow && <Content />}
    </div>
  )
}

export default App
