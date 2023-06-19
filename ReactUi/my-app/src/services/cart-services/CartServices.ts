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
}
