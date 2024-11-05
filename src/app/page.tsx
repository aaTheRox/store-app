import Image from "next/image";
import { Button } from "./components/ui/button";
import CarouselTextBanner from "./components/carousel-text-banner";
import FeaturedProducts from "./components/FeaturesProducts";
import BannerDiscount from "./components/BannerDiscount";
import Categories from "./components/Categories";
import BannerProduct from "./banner-product";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main>
        <CarouselTextBanner />
        <FeaturedProducts showButton />
        <BannerDiscount />
        <Categories />
        <BannerProduct />
        <Newsletter />
    </main>
  );
}
