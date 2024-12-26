import { Card, CardContent, CardFooter } from "@/app/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import IProductType from "../../../types/product";
import IconButton from "./IconButton";
import { useCart } from "../../../hooks/use-cart";
import Link from "next/link";
import formatPrice from "@/lib/formatPrice";

type ProductProps = {
  products?: IProductType;
  data: IProductType;
};

const Product = (props: ProductProps) => {
  const { addItem } = useCart();
  const productImage =
    process.env.NEXT_PUBLIC_BACKEND_URL + props.data?.images[0]?.url;
  return (
    <>
      {props?.data !== null && (
        <div
          key={props.data?.id}
          className="border-none shadow-none group-hover:opacity-100"
        >
          <div className="relative flex items-center justify-center ">
            <Link href={`product/${props.data.slug}`}>
              <img
                className=" w-full object-cover"
                src={
                  "https://aynadesign.com/cdn/shop/files/image00012_0e3d74d8-cf87-4394-8b9a-489409f03875_720x.jpg?v=1734256329"
                }
                alt={props.data.images[0]?.alternativeText}
              />

              {props.data.old_price !== null && (
                <span className="shadow-md bg-red-500 p-1.5 text-sm font-mono rounded-md absolute top-2 left-2 text-white">
                  OFERTA
                </span>
              )}
            </Link>

            <div className="absolute bottom-5 w-full px-6 transition group-hover:opacity-50 opacity-0 duration-200">
              <div className="flex justify-center gap-x-6">
                <IconButton
                  icon={<Heart size={20} />}
                  onClick={() => console.log("liked")}
                />
                <IconButton
                  icon={<ShoppingCart size={20} />}
                  onClick={() => addItem(props.data)}
                />
              </div>
            </div>
          </div>

          <div className="py-2 justify-center items-center">
            <h3 className="text-full uppercase">{props.data.productName}</h3>
            <h2>
              {formatPrice(props.data.price)}{" "}
              {props.data.old_price !== null && (
                <span className="line-through text-slate-500">
                  {props.data?.old_price}
                </span>
              )}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
