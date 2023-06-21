import { deserialize, serializable, serialize } from "serializr";
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
    public imageURL!:string;
    @serializable
    public id!:Number;
    public serialize():JSON{
        return serialize(this);
    }
    deserialize(input: any): this{
      return Object.assign(this, deserialize(ProductModel, input));
    }
}