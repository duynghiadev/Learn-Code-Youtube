export type ProductType = {
    id?:string,
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
    img:string;
    categoryId?: string;
    originalPrice:number
}