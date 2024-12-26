type IProductType = {
  id: number;
  slug: string;
  productName: string;
  productDescription: string;
  isFeatured: boolean;
  images: [
    {
      url: string;
      alternativeText: string;
    }
  ];
  price: number;
  old_price?: number;
  size?: string;
  color?: string;
  quantity: number;
};
export default IProductType;
