import Link from "next/link";
import { buttonVariants } from "./components/ui/button";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing , </p>
        <h4 className="mt-2 uppercase text-5xl font-extrabold">Prueba</h4>
        <p className="my-2 text-lg">Otro texto atractivo aqui...</p>
        <Link href="" className={buttonVariants()}>
          Comprar
        </Link>
      </div>

      <div className="md:h-[600px] h-[350px] bg-cover bg-[url('http://localhost:1337/uploads/pexels_photo_3685271_d5d51e1976.jpeg')] bg-center mt-5"></div>
    </>
  );
};

export default BannerProduct;
