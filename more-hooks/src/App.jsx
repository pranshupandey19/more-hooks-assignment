import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseReducer  from '../src/concept/UseReducer'
import TodoApp from './components/TodoApp'
import TodoItem from './components/TodoItem'
import UseRef from './concept/UseRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseReducer/> */}
      <TodoApp></TodoApp>
    </>
  )
}

export default App
