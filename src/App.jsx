import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos natus consequatur!",
      inStock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1527784281695-866fa715d9d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Objects",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos natus consequatur!",
      inStock: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos natus consequatur!",
      inStock: false,
    },
  ];

  const [realData, setRealData] = useState(data);

  const clickHandler = (cardIndex) => {
    setRealData((prev) =>
      prev.map((item, index) =>
        index === cardIndex ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  return (
    <div className="w-full h-screen flex gap-5 items-center justify-center bg-zinc-300">
      {realData.map((item, index) => (
        <Card key={index} index={index} clickHandler={clickHandler} values={item} />
      ))}
    </div>
  );
};

export default App;
