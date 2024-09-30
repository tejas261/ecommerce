/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ProductProps {
  id: number;
  price: number;
  name: string;
}

const ProductCard = ({ id, name, price }: ProductProps) => {
  return (
    <div key={id} className="flex flex-col">
      <img
        src={"https://placehold.co/600x400"}
        alt={name}
        className="rounded-xl h-full w-80"
      />
      <div>
        <h2 className="text-lg">{name}</h2>
        <h2>Ratings</h2>
        <p className="text-gray-500">&#8377;{Math.ceil(price * 10)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
