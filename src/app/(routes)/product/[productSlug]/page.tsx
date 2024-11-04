"use client"
import Container from "@/app/components/Container";
import { buttonVariants } from "@/app/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import useGetProduct from "../../../../../api/useGetProduct";
import formatPrice from "@/lib/formatPrice";
import IProductType from "../../../../../types/product";
import { Input } from "@/app/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Separator } from "@/app/components/ui/separator";
import { ProductImagesSlider } from "../components/carousel-images";

export default function Page() {
    const params = useParams()
    const { productSlug } = params 

    const { result, loading } = useGetProduct(productSlug)
    const product: IProductType = result
    return (
        <Container>
            {result && (
                <div className="flex flex-row gap-10">
                    <div className="basis-2/3">
                    <div>
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${result.images[0].url}`} alt="" />
                    </div>

                    <ProductImagesSlider />



                        <div className="mt-10">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        Detalles
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum sunt illo dolore fugiat impedit reprehenderit quibusdam cupiditate harum, iure necessitatibus tempore repellendus temporibus nihil et deserunt est sapiente architecto.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    </div>
                    <div className="mt-10 space-y-2 basis-1/3">
                        <h2 className="text-4xl">{product.productName}</h2>

                        <h4 className="text-2xl">{formatPrice(product.price)}</h4>
                        <p className="text-sm">Impuestos incluidos.</p>

                        <div className="flex w-[30%] mx-auto">
                            <button className={buttonVariants()}>-</button>
                            <Input className="text-center" width={10} disabled value={'1'} />
                            <button className={buttonVariants()}>+</button>
                        </div>

                        <div className="pt-5 space-y-5">
                        <Separator />
                            <p className="text-md">{product.productDescription}</p>
                        </div>

                        <div className="pt-5 space-y-5">
                            <Separator />
                            <button className={buttonVariants({ size: 'fw'})}><Plus size={40} strokeWidth={3} />Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            )}

        </Container>
    )
}
