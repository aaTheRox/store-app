import { Trash2 } from "lucide-react";
import { useCart } from "../../../hooks/use-cart";
import IProductType from "../../../types/product";
import formatPrice from "@/lib/formatPrice";

const PendingCart = () => {
  const { items, removeAll, removeItem } = useCart();

  return (
    <div className="w-[450px]">
      {items.map((product: IProductType) => (
        <div className="flex items-center mb-5 gap-4 border-b-[1px] border-b-gray-200 py-2 overflow-y-hidden overflow-x-auto max-h-[90%]">
          <div className="h-20 w-32 relative">
            <img
              className="bg-contain"
              src={process.env.NEXT_PUBLIC_BACKEND_URL + product.images[0].url}
              alt=""
            />
          </div>

          <div className=" flex-1 gap-10">
            <div className="block">
              <p>{product.productName}</p>
              {product.size ? "/" + product.size : ""}
            </div>

            <div className="text-right">
              <p className="text-sm">{formatPrice(product.price)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingCart;
