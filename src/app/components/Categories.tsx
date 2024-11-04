"use client"

import Link from "next/link";
import useGetCategories from "../../../api/getProducts";
import IResponseType from "../../../types/response";
import ICategoryType from "../../../types/category";
import Container from "./Container";
const Categories = () => {

    const { result, loading }: IResponseType = useGetCategories()
console.log(result)
    return (
        <Container>
            <h3 className="md:text-3xl text-2xl mt-5 pb-5">Elige tu categoría favorita</h3>

        <div className="grid gap-5 sm:grid-cols-3">

        {!loading && result !== undefined && (

            result?.map((category: ICategoryType) => (
                <Link key={category.categorySlug}
                href={`category/${category.categorySlug}`}
                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg">
                    <img className="max-w-[270px] h-full transition duration-300 ease-in-out rounded-lg hover:scale-110" src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.image.url}`} alt={category.image.alternativeText} />
                    <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">{category.categoryName}</p>
                </Link>
            ))
        )}
        </div>

        </Container>
    );
}
 
export default Categories;