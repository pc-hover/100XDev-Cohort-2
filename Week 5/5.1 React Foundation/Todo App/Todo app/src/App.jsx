import { useState } from "react";
//state components
//this will not work
// let state ={
// count :0
// }

function App() {
  const [todos, setTodos] = useState([
    {
      title: "dveelopment",
      description: "xcohirt coarse backlog",
      status: "true",
    },
    {
      title: "dsa",
      description: "Complete dsa",
      status: "false",
    },
  ]); // variable count and function setCount()

  //new thing appends new stuff at the end
  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "Power of Positivity",
        description: "Helloo world",
      },
    ]);
  }
  return (
    <div>
      <button onClick={addTodo}>Hit me</button>
      {todos.map(function (todos) {
        return (
          <Todo
            title={todos.title}
            description={todos.description}
            status={todos.status}
          />
        );
      })}
    </div>
  );
}

//defining  Component

function Todo(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h1>{props.text}</h1>
      <h1>{props.status}</h1>
    </>
  );
}

export default App;
