import Link from "next/link";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { Info, ShoppingBasket } from "lucide-react";
import { Input } from "@/app/components/ui/input";

const Newsletter = () => {
  return (
    <div className="p-5 sm:p-20 text-center bg-orange-100 dark:bg-white dark:text-white">
      <h2 className="uppercase font-black text-2xl text-primary">
        Inscríbe a nuestra newsletter
      </h2>
      <h3 className="text-primary/70">
        Manténte informado siempre con nuestra newsletter
      </h3>

      <form
        className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5"
        action=""
        method="post"
      >
        <Input
          placeholder="Indica tu correo electrónico..."
          className="placeholder:text-primary/20"
          type="email"
          required
        />
        <Button className={buttonVariants()}>Suscribírme</Button>
      </form>
    </div>
  );
};

export default Newsletter;
