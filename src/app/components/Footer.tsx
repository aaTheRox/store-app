"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import MenuListMobile from "./menu-list-mobile";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4 md:max-w-7xl mx-auto">
      <div></div>

      <div className=" items-center justify-between hidden sm:flex ">
        &copy; {new Date().getFullYear()}
      </div>

      <div className="flex sm:hidden">
        <MenuListMobile />
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <h2
          onClick={() => router.push("/")}
          className="text-3xl cursor-pointer"
        >
          Store<span className="font-bold">App</span>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
