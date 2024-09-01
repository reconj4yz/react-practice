import React from "react";
import { useState } from "react";

const App = () => {
  const [val, setVal] = useState([
    { name: "Kobe", age: 26 },
    { name: "Jordan", age: 36 },
    { name: "Michael", age: 28 },
  ]);
  return (
    <div className="p-5">
      {val.map((item) => (
        <div>
        <h1>{item.name}</h1>
        <h1>{item.age}</h1>
        </div>
      ))}
      <button
        onClick={() =>
          setVal(() => val.map(item => item.name === 'Jordan' ? {name: 'Jordan', age:30} : item))
        }
        className="px-2 py-1 rounded-md bg-sky-500"
      >
        Remove
      </button>
    </div>
  );
};

export default App;
