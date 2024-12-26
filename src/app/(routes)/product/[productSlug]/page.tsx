"use client";
import Container from "@/app/components/Container";
import { buttonVariants } from "@/app/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import useGetProduct from "../../../../../api/useGetProduct";
import formatPrice from "@/lib/formatPrice";
import IProductType from "../../../../../types/product";
import { Input } from "@/app/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Separator } from "@/app/components/ui/separator";

import ProductImagesSlider from "../../../components/carousel-images";
import { useCart } from "../../../../../hooks/use-cart";
import Recommended from "@/app/components/Recommended";
import ProductQuantity from "../components/product-quantity";
import AddToCart from "../components/add-to-cart";
import DetailsAccordion from "../components/details-accordion";
import ProductColor from "../components/product-color";

export default function Page() {
  const params = useParams();
  const { productSlug } = params;

  const { result, loading } = useGetProduct(productSlug);
  const product: IProductType = result;
  return (
    <Container>
      {result && (
        <div className="flex flex-row gap-10">
          <div className="basis-2/3">
            <ProductImagesSlider images={product.images} />
          </div>
          <div className="mt-10 space-y-2 basis-1/3">
            <h2 className="text-2xl text-primary uppercase">
              {product.productName}
            </h2>

            <h4 className="text-xl">
              {formatPrice(product.price)}{" "}
              <span className="text-xs  text-slate-800">
                Impuestos incluidos.
              </span>
            </h4>

            <ProductQuantity value="0" />
            <ProductColor />
            <DetailsAccordion description={product.productDescription} />

            <AddToCart detail={{ product: product, size: "M", quantity: 1 }} />
          </div>
        </div>
      )}

      <Recommended />
    </Container>
  );
}
