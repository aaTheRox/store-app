import { Card } from "@/app/components/ui/card";
import IProductType from "../../../../../../types/product";
import formatPrice from "@/lib/formatPrice";
import Link from "next/link";

type ProductCardProps = {
    product: IProductType
}

const ProductCard = (props: ProductCardProps) => {
    const { product } = props
    const { productName, price, slug } = product
    return (
        <div className="px-0 cursor-pointer  md:opacity-95 hover:opacity-100  h-80 bg-cover bg-no-repeat transition duration-150">
            <Link href={`/product/${slug}`}>
            <img
                className="w-full h-64 object-fill "
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.images[0]?.url}`}
                alt={product.images[0].alternativeText} /></Link>
            
            <div className="text-center mt-2">
                <h3 className="capitalize text-xl">{productName}</h3>
                <h3 className="text-xl font-bold"><span className="line-through text-sm text-gray-500">{formatPrice(price)}</span> {formatPrice(price)}</h3>
            </div>
        </div>
    );
}

export default ProductCard;