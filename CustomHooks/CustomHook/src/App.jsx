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
//Custom Hook for Online status
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
//Custom Hook for Mouse Pointer
function useMousePointer() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setCoordinates({ x: e.clientX, y: e.clientY });
  }
  useEffect(() => {

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }

  }, [])

  return coordinates;
}

function App() {


  const coordinates = useMousePointer();

  return (
    <>
      <div>
        X co-ordinate : {coordinates.x} <br />
        Y co-ordinate : {coordinates.y}
      </div >

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
