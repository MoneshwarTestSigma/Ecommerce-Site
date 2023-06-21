/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {CartModelAdd} from "../../models/CartModelAdd"
import { CartService } from "../../services/CartServices";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";


const Cart=()=>{
  const [cartItems,setCartItems]=useState([] as any[]);
  const navigate=useNavigate();
  const [userId,setUserId]=useState(-1);
  const [total,setTotal]=useState(0);
  let total1=0;
  let cartService=new CartService();
  
  const pluseOne=(data:any)=>{
    let cartModelAdd=new CartModelAdd();
    cartModelAdd.userid= userId;
    cartModelAdd.productid= data.productid;
    cartModelAdd.quantity= data.quantity + 1;
    
    cartService.changeCartCount(cartModelAdd);
  }
  const minusOne=(data:any)=>{
    let cartModelAdd=new CartModelAdd();
    cartModelAdd.userid= userId;
    cartModelAdd.productid= data.productid;
    cartModelAdd.quantity= data.quantity - 1;
    const JWT = Cookies.get('user');
    if(data.quantity-1>0)
    {
      cartService.changeCartCount(cartModelAdd);
    }
    else
    {
      cartService.deleteCartItem(data.id);
    }
}
 
  const handleCheckout=()=>{
    cartService.checkout(cartItems).then(res=>{
      navigate("/checkout");
    })
  }
  useEffect(()=>{
    const JWT = Cookies.get('user');
    if(JWT)
    {
            let email=jwt_decode<JwtPayload>(JWT);
      axios.get("http://localhost:8080/user/email/"+email.sub).then((res:any)=>{
        setUserId(res.data.userId);
        axios.get("http://localhost:8080/cart",{ headers: {"Authorization" : `Bearer ${JWT}`} }).then((res1:any)=>{
          setCartItems([]);
          total1=0;
        res1.data.map((data:any)=>{
          setCartItems(element=>[...element,data]);  
           setTotalfun(data.price*data.quantity);
          return null;
        })   
        
        })
      })
      
    }
    else
    {
      alert("Login First");
      navigate("/login")
    }
    
    
  },[])
  const setTotalfun=(price:number)=>{
        total1+=price;
        total1=Number(total1.toFixed(2));
        console.log(total1);
        setTotal(total1);
  }
  function deleteCartItem(data: any): void {
    cartService.deleteCartItem(data.id);
  }
 
    return (
        <>
<nav className="navbar navbar-light fixed-top bg-dark ">

<a className="navbar-brand text-light">Ecommerce Site</a>
<div style={{color:'aliceblue' ,fontSize: '30px'}}>Welcome to Cart</div>
<a href="/" className="previous">&laquo; Back to Shopping</a>

</nav>

<section  className="h-100 h-custom">
{cartItems.length===0 && <div  className="text-center" style={{marginTop: '100px'}}>
<h1>Cart is Empty</h1>
</div>}
{cartItems.length>0 &&

<div  className="container h-100 py-5">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col">

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="h5">Shopping Bag</th>
              <th scope="col">Product Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
          {cartItems.map((data,index)=>{ 
            

            return (
              <tr >
              <th scope="row">
                <div className="d-flex align-items-center">
                  <img src={(data.imageUrl==="noImage")?"images/unnamed.jpg":data.imageUrl} className="img-fluid rounded-3"
                    style={{width: '120px',marginRight:'20px'}} alt="image"/>
                  <div className="flex-column ms-4">
                    <p className="mb-2">{data.name}</p>
                  </div>
                </div>
              </th>
              <td className="align-middle">
                <p className="mb-0" style={{fontWeight: 500}}>{data.category}</p>
              </td>
              <td className="align-middle">
                <div className="d-flex flex-row">



                  <input id="form1" min="1"
                    className="form-control form-control-sm" style={{width: '50px'}}   value={data.quantity} /> 
                    <FontAwesomeIcon icon={faPlus} size="xl" style={{color: "#39c63c",margin:'7px'}}  onClick={()=>pluseOne(data)} />
                    <FontAwesomeIcon icon={faMinus} size="2xl" style={{color: "#e60a0a",margin:'7px'}} onClick={()=>minusOne(data)}/>
                    {/* <img src="images/pluse.png" style={{width:'25px',height:'25px',marginRight:'5px'}} alt="" onClick={()=>pluseOne(data)} /> */}
                    {/* <img src="images/minus.png" style={{width:'25px',height:'25px'}} alt="" onClick={()=>minusOne(data)}/> */}
                </div>


              </td>
              <td className="align-middle">
                <p className="mb-0" style={{fontWeight: 500}}>{(data.quantity * data.price).toFixed(2)}</p>
              </td>
              <td>
              <FontAwesomeIcon size="2x" icon={faTrash} style={{color: "#f22121",marginTop:"50px"}} onClick={()=>deleteCartItem(data)}/>
                {/* <button type="button"  style={{marginTop:'50px'}} className="btn btn-outline-danger" onClick={()=>deleteCartItem(data)}>Delete</button> */}
              </td>
            </tr>

          )})}

          
          </tbody>
        </table>
      </div>

      <div className="card shadow-2-strong mb-5 mb-lg-0" style={{borderRadius: '16px'}}>
        <div className="card-body p-4">

          <div className="row">
            <div className="col-lg-12 col-xl-12">
              <div className="d-flex justify-content-between" style={{fontWeight: 500}}>
                <p className="mb-2">Subtotal</p>
                <p className="mb-2">{total}</p>
              </div>

              <div className="d-flex justify-content-between" style={{fontWeight: 500}}>
                <p className="mb-0">Shipping</p>
                <p className="mb-0">30</p>
              </div>

              <hr className="my-4"/>

              <div className="d-flex justify-content-between mb-4" style={{fontWeight: 500}}>
                <p className="mb-2">Total (tax included)</p>
                <p className="mb-2">{total+30} </p>
              </div>

              <button  type="button" className="btn btn-primary " style={{float: 'right'}} onClick={handleCheckout}>
                <div className="d-flex justify-content-between">
                  <span>Checkout </span>
                </div>
              </button>

            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
}
</section>


</>


    );
}
export default Cart;

