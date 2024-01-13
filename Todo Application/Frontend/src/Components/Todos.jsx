/*Rendering Component

todos is the array of all todos as an input to this rendering function

{
    title:"",
    description:""
}
*/

export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key ={todo._id}>
            <h1 >{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
          </div>
        );
      })}
    </div>
  );
}
