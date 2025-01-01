"use client";
import Container from "@/app/components/Container";
import { buttonVariants } from "@/app/components/ui/button";
import { Trash2, LucideShoppingBag, LucideLock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "../../../../hooks/use-cart";
import IProductType from "../../../../types/product";
import formatPrice from "@/lib/formatPrice";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import ProductQuantity from "../product/components/product-quantity";

const totalPrice = 16.55;

export default function Page() {
  const router = useRouter();
  const { items, removeAll, removeItem } = useCart();
  function handleQuantity(productId: number, quantity: number): void {
    if (quantity == 0) {
      removeItem(productId);
    }
  }

  return (
    <Container>
      <div className="flex gap-4 text-center pb-4 border-b-gray-200 border-b-[1px] items-center justify-center">
        <LucideShoppingBag />
        <h3 className="text-4xl text-bold">Carrito</h3>
      </div>

      <div className="mt-10">
        <table className=" mx-auto w-full">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Talla/Color</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product: IProductType) => (
              <tr>
                <td>
                  <img
                    className="w-44 bg-contain"
                    src={
                      process.env.NEXT_PUBLIC_BACKEND_URL +
                      product.images[0].url
                    }
                    alt=""
                  />
                </td>
                <td className="">
                  <h4 className="text-md">
                    {product.productName}{" "}
                    {product.size ? "/" + product.size : ""}
                  </h4>
                  <span className="text-sm">{formatPrice(product.price)}</span>
                </td>
                <td>
                  <ProductQuantity value="0" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-10">
          <div className="text-right">
            <p className="text-3xl text-primary">{formatPrice(totalPrice)}</p>
            <p className="text-xs text-gray-600">
              Impuestos incluidos. Se calculará el precio del envío al final del
              pedido.
            </p>
            {items.length > 0 ? (
              <button
                onClick={() => router.push("/checkout")}
                className={buttonVariants({
                  className: "max-w-screen-md mb-5 mt-5",
                  size: "lg",
                })}
              >
                <LucideLock /> Tramitar pedido
              </button>
            ) : (
              <p className="mt-5">No tienes nada en el carrito</p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
