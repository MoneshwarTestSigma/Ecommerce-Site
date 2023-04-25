import { FileHandle } from "./FileHandle";

export interface ProductType{
    productName:string,
    productPrice:string,
    productCatagory:string,
    productImage:FileHandle[],
    productQuantity:string,
    productDescription:string
}