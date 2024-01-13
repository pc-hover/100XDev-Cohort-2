import React from "react"
import { memo } from "react";
import { useState } from "react";

function App() {  
  const [title,setTitle] =useState("Priyanshu Choudhary"); //initial state

  function updateTitle()
 {
    setTitle("Priyanshu Choudhary " + Math.random());//changed state
  }
  return (
    <div>
       <button onClick={updateTitle}>Update Header</button>
      <Header title ={title}></Header>

      <Header title="React Software developer"></Header>
      <Header title="React Software developer"></Header>
      <Header title="React Software developer"></Header>
      <Header title="React Software developer"></Header>
      <Header title="React Software developer"></Header>
      <Header title="React Software developer"></Header>
    </div>
  );
}

// function HeaderWithButton()
// {
//   const [title,setTitle] =useState("Priyanshu Choudhary"); //initial state

//   function updateTitle()
//   {
//      setTitle("Priyanshu Choudhary " + Math.random());//changed state
//   }
//   return <>
//     <button onClick={updateTitle}>Update Header</button>
//     <Header title ={title}></Header>
//   </>

// }

const Header = memo(function Header({ title }) {
  return <div>
    {title}
    </div>
})

export default App;
