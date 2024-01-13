import { useState } from 'react'

let global=4;

function App() {

  const [todos, setTodos] = useState([{
    id:1,
    title:"Gym",
    description:"I love gym"
  },{
    id:2,
    title:"Gym",
    description:"I love gym"
  },{
    id:3,
    title:"Gym",
    description:"I love gym"
  },])

  function UpdateTodos()
  {
//...todos is spread operator
    // setTodos([...todos,{
    //   id:4,
    //   title: "New todo",
    //   description: "new todo"
    // }])
//or

const newTodos =[];
for(let i=0;i<todos.length;i++)
{
  newTodos.push(todos[i]);
}

newTodos.push({
    id:global++,
    title: "New todo",
    description: "new todo"
})
setTodos(newTodos);

  } 
  return (
  
    <>
    
   <button onClick={UpdateTodos} style={{padding:10,margin:10}}>+</button>
{  
   todos.map(function(todos){
   return  <RenderTodos key ={todos.id} title={todos.title} description ={todos.description}></RenderTodos>
   })
}
   
    </>
  )
}
function RenderTodos({title,description})
{
  return <div>
   { 
   <div>
   <h2>{title}</h2> 
   <h2>{description}</h2> 
   
   </div>} 
  </div>
  }


function CreateTodo()
{
  return <div>
    <input type="text" placeholder='title' value={title}/>
    <br />
    <input type="text" placeholder='description' value={description}/>
  </div>
}
export default App
