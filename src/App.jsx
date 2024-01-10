import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl text-center bg-green-500 p-3 mb-5">
        React with Tailwind CSS
      </h1>
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
      </div>
      <p className="text-center mt-3 p-4 bg-red-800 text-white w-36 mx-auto rounded-full">
        Counter : {count}
      </p>
      <Card />
    </>
  );
}

export default App;
