"use client";
import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { useGetCarouselBannerText } from "../../../api/useGetCarouselBannerText";
import IResponseType from "../../../types/response";
import IBannerText from "../../../types/banner-text";
import SkeletonCard from "./SkeletonCard";

const CarouselTextBanner = () => {
  const { result, loading }: IResponseType = useGetCarouselBannerText();
  return (
    <Carousel
      className="w-full max-w-7xl mx-auto"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {loading && <SkeletonCard grid={1} />}
        {result?.map((bannerText: IBannerText) => (
          <CarouselItem key={bannerText.id}>
            <Card>
              <CardHeader>
                <CardTitle>{bannerText.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{bannerText.text}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselTextBanner;
