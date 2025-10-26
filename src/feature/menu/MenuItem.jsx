import React from "react";
import Button from "../../ui/Button";


export default function MenuItem({ item }) {
  console.log(item);
  return (
    <div className="flex gap-2 w-2/3">
      <div className="h-30">
        <img src={item.imageUrl} alt="" className="h-full" />
      </div>
      <div className="flex flex-col justify-between py-1 w-full">
        <div className="">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p>{item.ingredients.join(", ")}</p>
        </div>
        <div className="flex justify-between">
          <p>
            $ {item.unitPrice}
          </p>
            <Button>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}
