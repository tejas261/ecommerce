'use client'

import React from "react";
import logo from "../public/logoo.png";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 place-items-center">
        <div className="p-10">
          <Image src={logo} alt="" />
          <p className="text-gray-400">
            The one stop destination for all your style needs.
          </p>
          <p className="text-gray-400">
            From basic tees to royal suites, we&apos;ve got you covered
          </p>
          <div className="flex">
            <Facebook className="rounded-full m-2" />
            <Instagram className="rounded-full m-2" />
            <Twitter className="rounded-full m-2" />
          </div>
        </div>
        <div className="p-10">
          <h1 className="text-xl font-bold underline">COMPANY</h1>
          <ul>
            <li className="py-2">ABOUT</li>
            <li className="py-2">LEGAL</li>
            <li className="py-2">CAREERS</li>
          </ul>
        </div>
        <div className="p-10">
          <h1 className="text-xl font-bold underline">HELP</h1>
          <ul>
            <li className="py-2">CUSTOMER SUPPORT</li>
            <li className="py-2">TERMS & CONDITIONS</li>
            <li className="py-2">PRIVACY POLICY</li>
          </ul>
        </div>
        <div className="p-10">
          <h1 className="text-xl font-bold underline">FAQ</h1>
          <ul>
            <li className="py-2">ACCOUNT</li>
            <li className="py-2">ORDERS</li>
            <li className="py-2">PAYMENTS</li>
          </ul>
        </div>
      </div>
      <Separator/>
      <div className="px-10 py-5">
        <h1>Copyright &copy; 2024. All Rights Reserved</h1>
      </div>
    </>
  );
};

export default Footer;
