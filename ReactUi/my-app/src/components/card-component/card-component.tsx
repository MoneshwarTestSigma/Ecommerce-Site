import axios, { Axios } from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

interface CardProps {
    image: string;
    cardTitle: string;
    cardDescription: string;
    price: string;
    quantity: string;
    id:number;
    getUserId:()=>any;
  }
const Card:React.FC<CardProps>= ({ image, cardTitle, cardDescription, price, quantity,id,getUserId }) => {
  const navigate = useNavigate();
  const addToCart=()=>{
    const JWT = Cookies.get('JWT');
    if(JWT)
    {
        axios.post("http://localhost:8080/cart",{
          userid:getUserId(),
          productid:id,
          quantity:1
        },{ headers: {"Authorization" : `Bearer ${JWT}`} }).then((res)=>window.location.reload())
    }
    else
    {
      alert("Login In first !!");
      navigate("/login");
    }

  }
  return (
    <div className="card col-lg-3 col-md-6 col-sm-6" style={{ margin: "3rem" }}>
      <img src={image} className="card-img-top img-thumbnail" alt="..." style={{ width: "320px", height: "430px" }} />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: {price}</li>
        <li className="list-group-item">Quantity Left: {quantity}</li>
      </ul>
      <button className="btn btn-warning" style={{ marginBottom: "20px" }} onClick={addToCart}>
        <img src="images\cartIcon.ico" alt="" style={{ width: "30px", height: "30px", marginRight: "30px" }} /> Add to cart
      </button>
    </div>
  );
};

export default Card;