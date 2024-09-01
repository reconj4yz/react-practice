import React from "react";

const Card = ({values, index, clickHandler}) => {
  // console.log(clickHandler)
  const { image, name, description, inStock, } = values;
  return (
    <div className="flex items-center justify-center">
      <div className="w-52 bg-zinc-100  rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className="w-full px-3 py-4">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-xs mt-5">{description}</p>
          <button
            onClick={() => {
              clickHandler(index)
            }}
            className={`px-4 py-2 ${
              inStock ? "bg-blue-600" : "bg-red-600"
            } rounded-md text-xs mt-2 text-white`}
          >
            {inStock ? "In Stock" : "Out Of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
