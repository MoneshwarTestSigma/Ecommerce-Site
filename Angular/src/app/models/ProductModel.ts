import { serializable, serialize } from "serializr";
export class ProductModel{
    forEach(arg0: (element: any) => void) {
      throw new Error('Method not implemented.');
    }
    @serializable
    public name!:string;
    @serializable
    public category!:string;
    @serializable
    public description!:string;
    @serializable
    public price!:string;
    @serializable
    public count!:string;
    @serializable
    public image!:File;
    public serialize():JSON
    {
        return serialize(this);
    }
}