"use client";
import { ChevronRight, RefreshCwIcon } from "lucide-react";
import { useGetFeaturedProducts } from "../../../api/useGetFeaturedProducts";
import IResponseType from "../../../types/response";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/app/components/ui/button";
import Container from "./Container";
import DataRetrievingError from "@/app/components/DataRetrievingError";
import Product from "./Product";

import IProductType from "../../../types/product";
import SkeletonCard from "./SkeletonCard";

type FeaturedProductsProps = {
  showButton?: boolean;
};

const FeaturedProducts = (props: FeaturedProductsProps) => {
  const router = useRouter();

  const { result, loading, error }: IResponseType = useGetFeaturedProducts();
  return (
    <Container>
      <h3 className="uppercase font-black text-2xl text-primary my-5">
        Productos destacados
      </h3>

      <div className="md:grid md:grid-cols-4 gap-4">
        {loading && <SkeletonCard grid={3} />}

        {result !== null && !error ? (
          result?.map((product: IProductType) => {
            return <Product data={product} />;
          })
        ) : (
          <DataRetrievingError />
        )}

        {props.showButton && (
          <div className="mt-5 mx-auto text-center mb-10 col-span-full">
            <button
              onClick={() => router.push("/featured")}
              className={buttonVariants({})}
            >
              <ChevronRight /> Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default FeaturedProducts;
