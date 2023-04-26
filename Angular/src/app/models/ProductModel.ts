import { serializable, serialize } from "serializr";
export class ProductModel{
    @serializable
    public name!:string;
    @serializable
    public type!:string;
    @serializable
    public description!:string;
    @serializable
    public price!:string;
    @serializable
    public quantity!:string;
    @serializable
    public image!:File;
    public serialize():JSON
    {
        return serialize(this);
    }
}