import { useState } from 'react'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'
import './App.css'

function App() {
const [todos,setTodos] = useState([]);

fetch("http://localhost:3000/todos")
.then(async function(res){

  const json = await res.json();
  console.log(json);
  setTodos(json.todos)
})
  return (
  <div>

    <CreateTodo></CreateTodo>
    <Todos todos= {todos}></Todos>
  </div>

  )}
export default App

/*
import { useState, useEffect } from 'react';
import { CreateTodo } from './Components/CreateTodo';
import { Todos } from './Components/Todos';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const json = await response.json();
        setTodos(json.getPayload);  // Assuming your response structure has a property named "getPayload"
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
*/