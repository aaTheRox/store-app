"use client";
import { buttonVariants } from "@/app/components/ui/button";
import {
  ChevronLeft,
  LucideLock,
  LucideShoppingBag,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import formatPrice from "@/lib/formatPrice";
import IProductType from "../../../types/product";
import { useCart } from "../../../hooks/use-cart";

const Cart = ({ isDropdownActive, toggleDropdown }) => {
  const router = useRouter();

  const { items, removeAll, removeItem } = useCart();
  return;

  {
    isDropdownActive && (
      <div className="h-screen fixed top-10 p-10 border-gray-400 bg-white right-0 z-50 w-[600px] min-w-[40%] overflow-x-auto animate-slideIn">
        <div className="flex gap-4 mb-2 pb-4 border-b-gray-200 border-b-[1px]">
          <LucideShoppingBag />
          <h3> Carrito</h3>
        </div>

        {items.map((product: IProductType) => (
          <div className="flex items-center mb-5 gap-4 border-b-[1px] border-b-gray-200 py-2 overflow-y-hidden overflow-x-auto max-h-[90%]">
            <div className="h-20 w-32 relative">
              <img
                className="bg-contain"
                src={
                  process.env.NEXT_PUBLIC_BACKEND_URL + product.images[0].url
                }
                alt=""
              />
            </div>

            <div className="flex-1">
              <h4 className="text-md">
                {product.productName} {product.size ? "/" + product.size : ""}
              </h4>

              <div className="w-ful">
                <span className="text-sm">{formatPrice(product.price)}</span>
              </div>
            </div>

            <div className="">
              <button
                onClick={() => removeItem(product.id)}
                className="opacity-50 hover:opacity-100 transition-all duration-150"
              >
                <Trash2 />
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={() => router.push("/checkout")}
          className={buttonVariants({ className: "w-full mb-5" })}
        >
          <LucideLock /> Tramitar pedido
        </button>
      </div>
    );
  }
};

export default Cart;
