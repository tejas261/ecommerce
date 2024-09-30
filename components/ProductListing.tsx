import { productData } from "@/lib/productData";
import React from "react";
import ProductCard from "./ProductCard";

interface ProductlistingProps {
  type: string;
}

const ProductListing = ({ type }: ProductlistingProps) => {
  return (
    <div className="mx-5">
      <h1 className="font-semibold text-3xl">{type}</h1>
      <div className="grid grid-cols-3 gap-10 my-5">
        {productData.slice(0, 9).map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              id={product.id}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
