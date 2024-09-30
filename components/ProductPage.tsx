"use client";

import { productData } from "@/lib/productData";
import Image from "next/image";
import React from "react";

interface ProductPageProps {
  id: number;
}

const ProductPage = ({ id }: ProductPageProps) => {
  const product = productData.find((product) => id == product.id);
  return (
    <section>
      <div className="w-[50%] h-fit">
        {product?.imageURLs.map((url, index) => {
          return (
            <div key={index} className="flex flex-col">
              <Image src={url} alt="" />
            </div>
          );
        })}
        <Image src={product!.imageURLs.pop()!} alt="" />
      </div>
      <div className="w-[50%] h-fit">
        <h1 className="text-4xl font-bold uppercase"></h1>
      </div>
    </section>
  );
};

export default ProductPage;
