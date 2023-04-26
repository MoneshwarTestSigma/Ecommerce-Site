import { serializable,serialize } from "serializr";

export class CartModelAdd{
    @serializable
    public userid!:Number;
    @serializable
    public productid!:Number;
    @serializable
    public quantity!:Number;
    public serialize():JSON
    {
        return serialize(this);
    }
}