import React from "react";

function CategoryCards({ img, name, price, count }) {
  return (
    <div className="">
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
          <h3>{name}</h3>
          <p>{price}</p>
          <p>{count}</p> 
        </div>
        <img className="w-[100px]" src={img} alt={name} />
      </div>
    </div>
  );
}

export default CategoryCards;
