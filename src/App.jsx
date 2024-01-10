import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("black");

  return (
    <>
      <h1 className="text-3xl text-center bg-green-500 p-3 mb-5">
        React with Tailwind CSS
      </h1>
      <div style={{ backgroundColor: backgroundColor, height: "100vh" }}>
        <div className="grid grid-cols-2 mx-auto w-fit gap-8">
          <button
            className="bg-blue-800 text-white p-3"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            Add
          </button>
          <button
            className="bg-blue-800 text-white p-3"
            onClick={() => setCount((prevCount) => prevCount - 1)}
          >
            Subtract
          </button>
          <p className="text-center mt-3 p-4 bg-red-800 text-white w-36 h-14 mx-auto rounded-full">
            Counter : {count}
          </p>
          <Card />
        </div>
        <div className="grid grid-cols-3 mx-auto w-fit gap-8 mt-8">
          <button
            className="bg-red-800 text-white p-4 rounded-full"
            onClick={() => setBackgroundColor("red")}
          >
            Red
          </button>
          <button
            className="bg-green-800 text-white p-4 rounded-full"
            onClick={() => setBackgroundColor("green")}
          >
            Green
          </button>
          <button
            className="bg-blue-800 text-white p-4 rounded-full"
            onClick={() => setBackgroundColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
