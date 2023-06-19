import axios from "axios";
import Cookies from "js-cookie";
import { CartModelAdd } from "../../models/CartModelAdd";

export class CartService {
  changeCartCount(cartModelAdd: CartModelAdd) {
    const JWT = Cookies.get("JWT");
    if (JWT) {
      axios
        .post("http://localhost:8080/cart", cartModelAdd.serialize(), {
          headers: { Authorization: `Bearer ${JWT}` },
        })
        .then((res) => window.location.reload());
    }
  }
  deleteCartItem(id: number) {
    const JWT = Cookies.get("JWT");
    axios
      .delete("http://localhost:8080/cart/" + id, {
        headers: { Authorization: `Bearer ${JWT}` },
      })
      .then((res) => window.location.reload());
  }
  checkout(cartItems: any) {
    const JWT = Cookies.get("JWT");
    return axios.post("http://localhost:8080/cart/checkout", cartItems, {
      headers: { Authorization: `Bearer ${JWT}` },
    });
  }
}
