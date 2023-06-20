import { deserialize, serializable, serialize } from "serializr";
export class LoginModel {
  @serializable
  public username!: string;
  @serializable
  public password!: string;
  @serializable
  public type!: string;
  public serialize(): JSON {
    return serialize(this);
  }
  deserialize(input: any): this {
    return Object.assign(this, deserialize(LoginModel, input));
  }
}
