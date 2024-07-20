import { useState } from 'react'
import './App.css'
import ReactApp from './ReactApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ReactApp></ReactApp>
    </>
  )
}

export default App
