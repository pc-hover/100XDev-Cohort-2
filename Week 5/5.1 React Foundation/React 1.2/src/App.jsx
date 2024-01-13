import { useState } from "react";
//state components
//this will not work
// let state ={
// count :0
// }

function App() {
  const [count, setCount] = useState(0); // variable count and function setCount()

  return (
    <div>
      <CustomButton count={count} setCount={setCount}>
        {" "}
      </CustomButton>
      <CustomButton count={count * 2} setCount={setCount}>
        {" "}
      </CustomButton>
      <CustomButton count={count * 3} setCount={setCount}>
        {" "}
      </CustomButton>
      <CustomButton count={count * 100} setCount={setCount}>
        {" "}
      </CustomButton>
    </div>
  );
}

//defining  Component
function CustomButton(prop) {
  //state as input
  function onClickHandler() {
    //updating the state
    prop.setCount(prop.count + 1);
  }

  return (
    <>
      <button onClick={onClickHandler}> Counter {prop.count}</button>
    </>
  );
}
export default App;
