import { useEffect, useState } from 'react'
import axios from 'axios'
//Custom Hook for fetching data
function useTodos(n) {

  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([])


  //if n chnages from 
  useEffect(() => {

    //after 5 seconds this will run
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
    }, n * 1000)
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })

    return (() => {
      clearInterval(value);
    })

  }, [n])


  return {
    todos: todos,
    loading: loading
  };
}

function App() {

  const { todos, loading } = useTodos(2);


  if (loading) {
    return <div>
      Loading...
    </div>
  }

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App
