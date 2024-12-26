import Link from "next/link";
import { buttonVariants } from "@/app/components/ui/button";
import { Info, ShoppingBasket } from "lucide-react";

const BannerDiscount = () => {
  return (
    <div className="p-5 sm:p-20 text-center text-white dark:text-white bg-banner-discount bg-cover bg-center">
      <h2 className="uppercase font-black text-4xl">
        Consigue hasta un <span className="text-green-400">-20%</span>
      </h2>
      <h3 className="mt-5 text-xl font-thin ">
        -20% al gastar 100€ o -10% al gastar 150€.{" "}
      </h3>

      <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href="" className={buttonVariants()}>
          <ShoppingBasket /> Comprar
        </Link>
        <Link href="" className={buttonVariants({ variant: "destructive" })}>
          <Info />
          Más información
        </Link>
      </div>
    </div>
  );
};

export default BannerDiscount;
