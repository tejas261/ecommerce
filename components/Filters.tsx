/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Filters = () => {
  const [state, setState] = useState({ filter: "", size: "", sort: "" });

  const filters = ["T-Shirts", "Shirts", "Jeans", "Jackets", "Shoes"];
  const sizes = ["Xtra Small", "Small", "Large", "Medium", "Xtra Large"];
  const sort = [
    "Price:Low to High",
    "Price:High to Low",
    "Popularity",
    "Latest",
  ];

  // Update filter
  const setFilter = (filter: string) => {
    setState((prevState) => ({
      ...prevState,
      filter,
    }));
  };

  // Update size
  const setSize = (size: string) => {
    setState((prevState) => ({
      ...prevState,
      size,
    }));
  };

  // Update sort
  const setSort = (sort: string) => {
    setState((prevState) => ({
      ...prevState,
      sort,
    }));
  };
  return (
    <div className="rounded-2xl h-fit w-[20vw] border">
      <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="mx-4">
            <h1 className="font-semibold">Filters</h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap mx-3 gap-0.5">
              {filters.map((filter, index) => {
                return (
                  <Button
                    onClick={() => setFilter(filter)}
                    key={index}
                    variant={"outline"}
                    className="px-2 rounded-3xl m-1"
                  >
                    {filter}
                  </Button>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
        <Separator />
        <AccordionItem value="item-3">
          <AccordionTrigger className="mx-4">
            <h1 className="font-semibold">Sort</h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap m-3 gap-0.5">
              {sort.map((size, index) => {
                return (
                  <Button
                    onClick={() => setSort(size)}
                    key={index}
                    variant={"outline"}
                    className="px-2 rounded-3xl m-1"
                  >
                    {size}
                  </Button>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
        <Separator />
        <AccordionItem value="item-3">
          <AccordionTrigger className="mx-4">
            <h1 className="font-semibold">Size</h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap m-3 gap-0.5">
              {sizes.map((size, index) => {
                return (
                  <Button
                    onClick={() => setSize(size)}
                    key={index}
                    variant={"outline"}
                    className="px-2 rounded-3xl m-1"
                  >
                    {size}
                  </Button>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filters;
