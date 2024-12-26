"use client"
import { useParams } from "next/navigation"
import { useGeCategoryProduct } from "../../../../../api/useGeCategoryProduct"
import IResponseType from "../../../../../types/response"
import FiltersControlsCategory from "./components/filters-controls-category"
import { Separator } from "@/app/components/ui/separator"
import SkeletonCard from "@/app/components/SkeletonCard"
import ProductCard from "./components/product-card"
import IProductType from "../../../../../types/product"
import Container from "@/app/components/Container"
import FilterSorting from "./components/filter-sorting"
import { useState } from "react"

export default function Page() {
    const params = useParams()
    const { categorySlug }: any = params
    const { result, loading }: IResponseType = useGeCategoryProduct(categorySlug)
    const [filterSize, setFilterSize] = useState('')
    const [filterColor, setFilterColor] = useState('')

    let filteredProducts = result !== null && !loading && (
        filterSize == '' ? result : result.filter((product: IProductType) => product?.size == filterSize)
    )

    return (
        <Container>
            {!loading && result !== null && (
                <h1 className="text-3xl font-medium">{result[0].category.categoryName}</h1>
            )}
            <Separator />
            <div className="sm:flex sm:justify-start grid grid-cols-2">
                <div>
                    <FiltersControlsCategory product={result} setFilterColor={setFilterColor} setFilterSize={setFilterSize} />
                </div>

                <div className="flex flex-col">

                    <div className="col-span-full mt-5">
                        <FilterSorting />
                    </div>

                    {loading && (
                        <SkeletonCard grid={3} />
                    )}
                    <div className="mt-10 flex gap-8">
                    {!loading && filteredProducts !== null && (
                        filteredProducts.map((product: IProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                    </div>

                    {!loading && filteredProducts.length == 0 && (
                        <p>No hay ningún articulo</p>
                    )}
                </div>
            </div>
        </Container>
    )
}
