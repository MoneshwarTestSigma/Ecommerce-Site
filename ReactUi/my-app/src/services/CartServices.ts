// @ts-ignore
import { reject } from "lodash";
import axios from "axios";
import Cookies from "js-cookie";
import { CartModelAdd } from "../models/CartModelAdd";
import Api from "../instance";

const namespace = '/cart';
export class CartService {
  changeCartCount(cartModelAdd: CartModelAdd) {
    // const JWT = Cookies.get("JWT");
    // if (JWT) {
    //   axios
    //     .post("http://localhost:8080/cart", cartModelAdd.serialize(), {
    //       headers: { Authorization: `Bearer ${JWT}` },
    //     })
    //     .then((res) => window.location.reload());
    // }
   Api.post(`${namespace}`,cartModelAdd.serialize()).then(()=>{
      console.log("count changed successfully");
      window.location.reload();
    }).catch(e => {reject(e)
      alert("server error in reducing count")})
  }
  deleteCartItem(id: number) {
    // const JWT = Cookies.get("JWT");
    // axios
    //   .delete("http://localhost:8080/cart/" + id, {
    //     headers: { Authorization: `Bearer ${JWT}` },
    //   })
    //   .then((res) => window.location.reload());
    Api.remove(`${namespace}/${id}`).then(()=>{
      window.location.reload();
    }).catch(e => {
      reject(e)
    })
  }
  checkout(cartItems: any) {
    // const JWT = Cookies.get("JWT");
    // return axios.post("http://localhost:8080/cart/checkout", cartItems, {
    //   headers: { Authorization: `Bearer ${JWT}` },
    // });
    return Api.post(`${namespace}/checkout`,cartItems).then(()=>{
      console.log("items checked out")
    }).catch(e => {
      reject(e)
    })
  }
}
