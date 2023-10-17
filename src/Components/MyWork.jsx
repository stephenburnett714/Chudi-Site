import React, { useState } from "react";
import data from "../assets/Data/work.js";

export default function MyWork() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="py-16 mx-8">
      <div className="text-center pb-4 text-4xl">My Work</div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.name} className="relative flex">
            <div
              onClick={() => handleClick(item)}
              className="flex items-center justify-center hover:transform hover:scale-105 transition-transform"
            >
              <img src={item.image} alt={item.name} className="mx-auto" />
            </div>
            {selectedItem === item && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-black bg-opacity-50 rounded-md">
                <div className="text-2xl font-bold">{item.name}</div>
                <div className="text-xs">{item.description}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}