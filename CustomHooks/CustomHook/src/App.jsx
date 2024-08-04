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
//custom  hook for checking online status
function useIsOnline() {

  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    //this logic is for when we will change online status
    window.addEventListener("online", () => {
      setIsOnline(true);
    })
    window.addEventListener("offline", () => {
      setIsOnline(false);
    })
    //In case isOnline chnages in dependency this will run

  }, [])

  return isOnline;
}

function App() {

  const { todos, loading } = useTodos(5);
  const isOnline = useIsOnline();
  if (isOnline) {
    return "You are online"
  }
  else {
    return "You are offline"
  }
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
