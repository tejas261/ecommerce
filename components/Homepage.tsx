/* eslint-disable @next/next/no-img-element */
import React from "react";
import homepage from "../public/homepage-image.png";
import vector from "../public/Vector1.png";
import brand1 from "../public/brands/brand1.png";
import style1 from "../public/style1.svg";
import brand2 from "../public/brands/brand-2.png";
import brand3 from "../public/brands/brand-3.png";
import brand4 from "../public/brands/brand-4.png";
import brand5 from "../public/brands/brand-5.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { productData } from "@/lib/productData";

const Homepage = () => {
  return (
    <>
      <section className="bg-gray-300 relative">
        <div className="flex flex-col">
          <div className="w-full">
            <Image
              className="w-full h-auto"
              src={homepage}
              alt="homepage-img"
            />
          </div>

          <div className="w-full flex justify-center">
            <Image
              width={50}
              height={50}
              src={vector}
              alt="vector"
              className="absolute top-[35vw]"
              style={{ bottom: "35%" }}
            />
          </div>

          <div className="w-[40vw] text-left z-10 absolute mt-40 mx-20">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button className="bg-black text-white py-3 px-6 rounded-full text-lg hover:bg-gray-800 transition">
              Shop Now
            </Button>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-lg">
              <div className="text-center md:text-left">
                <h2 className="text-2xl">200+</h2>
                <p className="text-gray-500">International Brands</p>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl">2,000+</h2>
                <p className="text-gray-500">High-Quality Products</p>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl">30,000+</h2>
                <p className="text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <Image
              src={vector}
              alt="vector"
              className="absolute top-[20vw]"
              style={{ bottom: "50%" }}
            />
          </div>
        </div>

        {/* Brands Section */}
        <div className="flex p-5 bg-black z-20 justify-between relative">
          <Image src={brand1} alt="brand1" width={100} height={100} />
          <Image src={brand2} alt="brand2" width={100} height={100} />
          <Image src={brand3} alt="brand3" width={100} height={100} />
          <Image src={brand4} alt="brand4" width={100} height={100} />
          <Image src={brand5} alt="brand5" width={100} height={100} />
        </div>
      </section>

      {/* NEW ARRIVAL */}
      <section>
        <h1 className="text-center font-bold text-3xl my-16">NEW ARRIVALS</h1>
        <div className="grid grid-cols-4 place-items-center">
          {productData.slice(0, 4).map((product) => {
            return (
              <div key={product.id} className="flex flex-col">
                <img
                  src={encodeURI("https://placehold.co/600x400")}
                  alt={product.name}
                  className="rounded-xl w-72 h-full"
                />
                <div>
                  <h2 className="text-lg">{product.name}</h2>
                  <h2>Ratings</h2>
                  <p className="text-gray-500">
                    &#8377;{Math.ceil(product.price * 10)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto w-40">
          <Button className="rounded-2xl p-2 bg-transparent text-black border w-40 m-6 text-md">
            View All
          </Button>
        </div>
      </section>

      {/* TOP SELLING */}
      <section>
        <h1 className="text-center font-bold text-3xl my-16">TOP SELLING</h1>
        <div className="grid grid-cols-4 place-items-center">
          {productData.slice(5, 9).map((product) => {
            return (
              <div key={product.id} className="flex flex-col">
                <img
                  src={encodeURI("https://placehold.co/600x400")}
                  alt={product.name}
                  className="rounded-xl w-72 h-full"
                />
                <div>
                  <h2 className="text-lg">{product.name}</h2>
                  <h2>Ratings</h2>
                  <p className="text-gray-500">
                    &#8377;{Math.ceil(product.price * 10)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto w-40">
          <Button className="rounded-2xl p-2 bg-transparent text-black border w-40 m-6 text-md">
            View All
          </Button>
        </div>
      </section>

      {/* BROWSE BY STYLE */}
      <section className="rounded-2xl bg-gray-100 m-10">
        <h1 className="text-center font-bold text-3xl py-16">BROWSE BY STYLE</h1>
        <div className="flex">
          <Image className="mx-2" src={style1} alt="style1" />
          <Image className="w-full h-80 object-cover mx-2 rounded-2xl" src={style1} alt="style1" />
        </div>
        <div className="flex my-5">
          <Image className="w-full h-80 object-cover rounded-2xl mx-2" src={style1} alt="style1" />
          <Image className="mx-2" src={style1} alt="style1" />
        </div>
      </section>
    </>
  );
};

export default Homepage;
