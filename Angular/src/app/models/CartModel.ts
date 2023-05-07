import { deserialize, serializable } from "serializr";

export class CartModel{
    @serializable
    public name!:string;
    @serializable
    public price!:Number;
    @serializable
    public category!:string;
    @serializable
    public quantity!:Number;
    @serializable
    public productid!:number;
    @serializable
    public id!:number;
    @serializable
    public imageUrl!:string;
    deserialize(input: any): this {
        return Object.assign(this, deserialize(CartModel, input));
      }
}
