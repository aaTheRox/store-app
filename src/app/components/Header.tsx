"use client";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import MenuListMobile from "./menu-list-mobile";
import { useEffect, useRef, useState } from "react";
import Cart from "./cart";

const Header = () => {
  const router = useRouter();
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    if (showCart && cartRef.current) {
    }
  }, [showCart]);

  const handleOpenShoppingBag = () => {
    router.push("/cart");
    //body?.classList.contains('overflow-auto') ? body?.classList.add('overflow-hidden') : body?.classList.remove('overflow-hidden')
  };
  return (
    <div>
      <div className="flex items-center justify-between p-2 md:max-w-7xl mx-auto">
        <h1
          onClick={() => router.push("/")}
          className="hover:scale-105 text-3xl cursor-pointer transition duration-150"
        >
          Store<span className="font-bold">App</span>
        </h1>

        <div className=" items-center justify-between hidden sm:flex ">
          <MenuList />
        </div>

        <div className="flex sm:hidden">
          <MenuListMobile />
        </div>

        <div className="flex items-center justify-between gap-2 sm:gap-7">
          <Search strokeWidth={1} />

          <div className="relative">
            <ShoppingCart
              strokeWidth="1"
              className="cursor-pointer"
              data-dialog-target="modal"
              onClick={handleOpenShoppingBag}
            />
            <span className="bg-black p-1.5 rounded-2xl -top-2.5 shadow-md absolute -left-2 text-white text-[9px]">
              0
            </span>
          </div>
          <Heart
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => router.push("/liked")}
          />
          <User
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => router.push("/login")}
          />
        </div>
      </div>

      {showCart && (
        <div ref={cartRef}>
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Header;
