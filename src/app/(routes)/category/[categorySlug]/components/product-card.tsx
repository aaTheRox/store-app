import { Card } from "@/app/components/ui/card";
import IProductType from "../../../../../../types/product";
import formatPrice from "@/lib/formatPrice";
import Link from "next/link";
import Image from "next/image";
type ProductCardProps = {
  product: IProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const { productName, price, slug } = product;
  return (
    <div className="px-0 cursor-pointer  md:opacity-95 hover:opacity-100 w-[235px]  h-80 bg-cover bg-no-repeat transition duration-150">
      <Link href={`/product/${slug}`}>
        <Image
          className="w-full h-64 object-cover "
          width={300}
          height={400}
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0]?.url}`}
          alt={product.images[0].alternativeText}
        />
      </Link>

      <div className="text-center mt-2">
        <h3 className="capitalize text-xl">{productName}</h3>
        <h3 className="text-md text-primary font-bold">
          <span className="line-through text-sm text-gray-500">
            {formatPrice(price)}
          </span>{" "}
          {formatPrice(price)}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
