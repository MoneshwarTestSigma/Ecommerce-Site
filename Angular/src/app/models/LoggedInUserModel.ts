import { deserialize, serializable } from "serializr";

export class LoggedInUserModel{
    @serializable
    public name!:string;
    @serializable
    public type!:string;
    @serializable
    public userId!:Number;
    deserialize(input: any): this {
        return Object.assign(this, deserialize(LoggedInUserModel, input));
    }
} 