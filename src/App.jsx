import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Handling Counters</h1>
      <div className="buttons">
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Add
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Subtract
        </button>
      </div>
      <p>Counter : {count}</p>
    </>
  );
}

export default App;
