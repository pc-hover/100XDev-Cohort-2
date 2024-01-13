import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//dynamic websites requires alot of javascript for DOM manipulation

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;

//npm createv vite@latest
//npm install
//npm run dev
