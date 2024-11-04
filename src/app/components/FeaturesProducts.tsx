"use client"
import { ChevronRight, Expand, Feather, ShoppingCart } from "lucide-react"
import { useGetFeaturedProducts } from "../../../api/useGetFeaturedProducts"
import IProductType from "../../../types/product"
import IResponseType from "../../../types/response"
import Product from "./Product"
import SkeletonCard from "./SkeletonCard"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import IconButton from "./IconButton"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { buttonVariants } from "./ui/button"
import Container from "./Container"

type FeaturedProductsProps = {
    showButton?: boolean
}

const FeaturedProducts = (props: FeaturedProductsProps) => {
    const router = useRouter()

    const { result, loading }: IResponseType = useGetFeaturedProducts()
    return (
        <Container>
            <h3 className="md:text-3xl text-2xl mt-5 ">Productos destacados</h3>

            <Carousel>
                <CarouselContent className="ml-4 space-x-4">
                    {loading && (
                        <SkeletonCard grid={3} />
                    )}

                    {result !== null && (
                        result.map((product: IProductType) => {

                            const { slug, productName, productDescription, images, price } = product
                            return (
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 group" key={slug}>
                                    <div className="p-1">
                                        <Card className="border-none shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                <Link href={`product/${slug}`}>
                                                    <img
                                                        className="lg:h-80 w-full object-cover"
                                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${images[0]?.url}`}
                                                        alt={images[0]?.alternativeText} />
                                                </Link>

                                                <div className="absolute bottom-5 w-full px-6 transition group-hover:opacity-100 opacity-0 duration-200">
                                                    <div className="flex justify-center gap-x-6">
                                                        <IconButton icon={<Expand size={20} />} onClick={() => router.push(`product/${slug}`)} />
                                                        <IconButton icon={<ShoppingCart size={20} />} onClick={() => console.log(slug)} />
                                                    </div>
                                                </div>
                                            </CardContent>

                                            <CardFooter className="flex gap-4 px-8 justify-center">
                                                <h3 className="text-full font-bold">{productName}</h3>
                                                <div className="flex items-center justify-center gap-3 ">
                                                    <span className="rounded-md px-3 py-0 text-white bg-red-500">Rojo</span>
                                                    <span className="rounded-full px-3 py-0 text-sm text-white bg-black dark:bg-white dark:text-white">XL</span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )}

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>

            {props.showButton && (
                <div className="mt-5 mx-auto text-center mb-10">
                    <button onClick={() => router.push('/featured')} className={buttonVariants({})}><ChevronRight /> Ver todos los productos</button>
                </div>
            ) }

        </Container>
    )
}

export default FeaturedProducts