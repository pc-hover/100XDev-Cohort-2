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
//Custom Hook that runs Callbackfunction after n seconds
function useIntervals(func, { n }) {

  const [response, setResponse] = useState();

  useEffect(() => {

    const value = setInterval(() => {
      setResponse(func());
    }, n * 1000)

    return () => {
      clearInterval(value);
    }
  }, [n, func]);


  return response;
}
//Custom hook for Debouncing
function useDebounce(search, time) {
  //after change wait for time before sending search back
  const [debounce, setDebounce] = useState(search)
  useEffect(() => {

    const value = setTimeout(() => {
      setDebounce(search);
    }, time)

    return () => {
      clearTimeout(value);
    }
  }, [search]);

  return debounce;
}

function App() {

  const [search, setSearch] = useState("");

  const debounce = useDebounce(search, 500);
  console.log("re-render")

  return (
    <>
      {console.log(debounce)}
      <div>
        <input type="text" onChange={(e) => {
          setSearch(e.target.value);
        }} />
        Debounce Value : {debounce}
      </div >
    </>
  )
}


export default App
