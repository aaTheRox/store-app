"use client"


import Autoplay from "embla-carousel-autoplay"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"


const CarouselData = [{
    id: 0,
    title: '¡Envío gratuito!',
    text: 'Envio gratuito en pedido de más de 50€ a toda en toda España.'
},
{
    id: 1,
    title: '30 días para hacer tu devoluciones',
    text: 'Tienes 30 dias para pedir tu devolución si lo que has comprado no te encaja!'
}
]


const CarouselTextBanner = () => {
    return (
        <Carousel className="w-full max-w-7xl mx-auto"
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}>
            <CarouselContent>
                {CarouselData.map(({ id, title, text }) => (
                    <CarouselItem key={id}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{text}</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}

export default CarouselTextBanner