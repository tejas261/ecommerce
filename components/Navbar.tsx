'use client'

import Image from "next/image";
import React from "react";
import logo from "../public/logoo.png";
import { Input } from "./ui/input";
import { ShoppingCart, UserCircleIcon } from "lucide-react";

// import { Icons } from "@/components/icons"
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

const components: {
  title: string;
  href: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Men",
    href: "/men",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Women",
    href: "/women",
    description:
      "For sighted users to preview content available behind a link.",
      image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Footwear",
    href: "/footwear",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Accessories",
    href: "/accessories",
    description: "Visually or semantically separates content.",
    image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Navbar = () => {
  return (
    <>
      
      <div className="bg-white flex justify-around text-black my-5">
        <Image src={logo} alt="logo" width={200} />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component,index) => (
                    <div className="flex" key={index}>
                      <Image src={component.image} alt="img" width={50} height={50}/>
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/brands" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Brands
                </NavigationMenuLink>
              </Link>
              <Link href="/sale" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  On Sale
                </NavigationMenuLink>
              </Link>
              <Link href="/new-arrivals" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  New Arrivals
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center w-[40vw]">
          <Input
            type="text"
            placeholder="Search for a wide variety of products"
          />
        </div>
        <div className="flex items-center">
          <ShoppingCart className="mx-10" />
          <UserCircleIcon />
        </div>
      </div>
      <Separator/>
    </>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
