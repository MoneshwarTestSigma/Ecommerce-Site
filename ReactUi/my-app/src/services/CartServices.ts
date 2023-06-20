// @ts-ignore
import { reject } from "lodash";
import { CartModelAdd } from "../models/CartModelAdd";
import Api from "../instance";

const namespace = "/cart";
export class CartService {
  changeCartCount(cartModelAdd: CartModelAdd) {
    Api.post(`${namespace}`, cartModelAdd.serialize())
      .then(() => {
        console.log("count changed successfully");
        window.location.reload();
      })
      .catch((e) => {
        reject(e);
        alert("server error in reducing count");
      });
  }
  deleteCartItem(id: number) {
    Api.remove(`${namespace}/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((e) => {
        reject(e);
      });
  }
  checkout(cartItems: any) {
    return Api.post(`${namespace}/checkout`, cartItems)
      .then(() => {
        console.log("items checked out");
      })
      .catch((e) => {
        reject(e);
      });
  }
}
