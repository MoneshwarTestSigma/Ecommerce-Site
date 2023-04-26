import { serializable, serialize } from "serializr";
export class LoginModel{
    @serializable
    public email!: string;
    @serializable
    public password!:string;
    @serializable
    public type!: string;
    public serialize():JSON
    {
        return serialize(this);
    }

}