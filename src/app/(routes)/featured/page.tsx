"use client";
import Container from "@/app/components/Container";
import IResponseType from "../../../../types/response";
import { useGetFeaturedProducts } from "../../../../api/useGetFeaturedProducts";
import SkeletonCard from "@/app/components/SkeletonCard";
import IProductType from "../../../../types/product";
import Product from "@/app/components/Product";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/app/components/ui/carousel";
import DataRetrievingError from "@/app/components/DataRetrievingError";

export default function Page() {
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
            return (
              <Carousel>
                <CarouselContent className="ml-4 space-x-4">
                  <Product data={product} />
                  <CarouselPrevious />
                  <CarouselNext className="hidden sm:flex" />
                </CarouselContent>
              </Carousel>
            );
          })
        ) : (
          <DataRetrievingError />
        )}
      </div>
    </Container>
  );
}
