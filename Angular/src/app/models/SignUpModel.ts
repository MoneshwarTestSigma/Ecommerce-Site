import { deserialize, serializable,serialize } from "serializr";

export class SignUpModel{
    @serializable
    public email!: string;
    @serializable
    public password!:string;
    @serializable
    public name!: string;
    @serializable
    public type!: string;
    public serialize():JSON{
        return serialize(this);
    }
    deserialize(input: any): this {
        return Object.assign(this, deserialize(SignUpModel, input));
    }
}