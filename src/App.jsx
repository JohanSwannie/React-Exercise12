import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Add
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Subtract
        </button>
        <p>Counter : {count}</p>
      </div>
    </>
  );
}

export default App;
