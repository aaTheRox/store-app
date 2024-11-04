type IProductType = {
    id: number,
    slug: string,
    productName: string,
    productDescription: string,
    isFeatured: boolean,
    images: [{
        url: string,
        alternativeText: string
    }],
    price: number,
    size?: string,
    color?: string
}
export default IProductType