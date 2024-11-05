import { useState } from "react";

type SliderImageType = {
    url: string,
    alternativeText: string
}

type ImagesSliderProps = {
    images: SliderImageType[]
}

const ProductImagesSlider = (props: ImagesSliderProps) => {
    const { images } = props
    const [currentImage, setcurrentImage] = useState(`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`)
    return (
        <section>

        <div>
            <img id="carousel-container" className="max-h-dvh" src={currentImage} alt={images[0].alternativeText} />
        </div>

        <div className="flex gap-4 mt-10">
            { images.map((image: any) => (
                <img key={image.url} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                id={image.id}
                onClick={() => setSliderImage(image.url)}
                className="h-32 w-32 object-cover border border-slate-400 opacity-50 hover:opacity-100 duration-100 transition cursor-pointer" 
                alt={image.alternativeText} />
            )) }
            
        
        </div>
        </section>

    )


    function setSliderImage(image: string) {
        setcurrentImage(`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`)
        const targetImage = event?.target as HTMLImageElement
        if(targetImage.getAttribute('id')) {
            document.getElementById(targetImage.getAttribute('id')).classList.add('opacity-100')
        }
    }
}

export default ProductImagesSlider