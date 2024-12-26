import Link from "next/link";
import { buttonVariants } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useState } from "react";

type ProductQuantityProps = {
  value?: string;
};

const ProductQuantity = (props: ProductQuantityProps) => {
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    quantity >= 0 ? setQuantity(quantity + 1) : setQuantity(0);
    console.log(quantity);
  };

  const removeQuantity = () => {
    console.log(quantity);
    quantity >= 0 ? setQuantity(quantity - 1) : setQuantity(0);
  };

  return (
    <div className=" mx-auto">
      <p className="mr-5 mt-2 text-xs my-5">Cantidad</p>
      <div className="flex items-center justify-center">
        <div className="w-[10%]">
          <button onClick={removeQuantity} className={buttonVariants()}>
            -
          </button>
        </div>

        <div className="w-full">
          <Input className="text-center" width={10} disabled value={quantity} />
        </div>
        <div className="w-[10%]">
          <button onClick={addQuantity} className={buttonVariants()}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductQuantity;
