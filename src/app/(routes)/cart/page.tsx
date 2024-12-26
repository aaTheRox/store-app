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
      <div className="flex gap-4 mt-10 pb-4 border-b-gray-200 border-b-[1px]">
        <LucideShoppingBag />
        <h3 className="text-xl text-bold">Carrito</h3>
      </div>
      {items.map((product: IProductType) => (
        <table className="w-full">
          <tbody>
            <tr>
              <td className="w-[150px]">
                <img
                  className="w-32 bg-contain"
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_URL + product.images[0].url
                  }
                  alt=""
                />
              </td>
              <td className="w-[250px]">
                <h4 className="text-md">
                  {product.productName} {product.size ? "/" + product.size : ""}
                </h4>
                <span className="text-sm">{formatPrice(product.price)}</span>
              </td>
              <td>
                <Select
                  onValueChange={(quantity) =>
                    handleQuantity(product.id, Number(quantity))
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Cantidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        onClick={() => console.log("sksjs")}
                        value="0"
                      >
                        Eliminar
                      </SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </td>
            </tr>
          </tbody>
        </table>
      ))}

      {items.length > 0 ? (
        <button
          onClick={() => router.push("/checkout")}
          className={buttonVariants({ className: "w-full mb-5 mt-5" })}
        >
          <LucideLock /> Tramitar pedido
        </button>
      ) : (
        <p className="mt-5">No tienes nada en el carrito</p>
      )}
    </Container>
  );
}
