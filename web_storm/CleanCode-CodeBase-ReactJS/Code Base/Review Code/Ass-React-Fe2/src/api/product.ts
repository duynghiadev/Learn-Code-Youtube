import { ProductType } from "../types/Product";
import instance from "./instance";


export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}
export const editProduct = (product:ProductType) => {
    const url = `/products/${product.id}`
    return instance.put(url, product)
}
export const deleteProduct = (id:string) => {
    const url = "/products/"+id;
    return instance.delete(url)
}
export const getProductId = (id:string) => {
        
    const url = `/products/${id}`;
    console.log(url);
    
    return instance.get(url)
}
export const getProductCategory = (id:string) => {
    const url = `/categories/${id}/products`;
    return instance.get(url)
}