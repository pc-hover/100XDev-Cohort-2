import { useState, useContext } from 'react'
import { UserContext } from './Counter'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <UserContext.Provider value={{ count, setCount }}>
        <CounterComponent />
      </UserContext.Provider>
    </div>

  )
}
export const CounterComponent = () => {
  console.log("count re renders")
  return (
    <div>
      <Buttons />
      <CountRenderer />
    </div>
  )
}

const Buttons = () => {
  const { count, setCount } = useContext(UserContext)
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }} > press me</button>
    </div>
  )
}
const CountRenderer = () => {
  const { count, setCount } = useContext(UserContext)
  return (
    <div>
      {count}
    </div>
  )
}
export default App