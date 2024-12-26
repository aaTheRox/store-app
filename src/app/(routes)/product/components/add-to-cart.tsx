import Link from "next/link";
import { buttonVariants } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useState } from "react";
import { Plus } from "lucide-react";
import IProductType from "../../../../../types/product";
import { useCart } from "../../../../../hooks/use-cart";

type AddToCartProps = {
  detail: {
    product: IProductType;
    size: string;
    quantity: number;
  };
};

const AddToCart = (props: AddToCartProps) => {
  console.log(props.detail);
  const { addItem } = useCart();

  return (
    <>
      <button
        onClick={() => addItem(props.detail.product)}
        className={buttonVariants({ size: "lg", class: "w-full" })}
      >
        <Plus size={40} strokeWidth={3} />
        Añadir al carrito
      </button>
    </>
  );
};

export default AddToCart;
