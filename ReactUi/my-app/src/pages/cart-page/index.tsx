import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Cart=()=>{
  const [cartItems,setCartItems]=useState([] as any[]);
  const navigate=useNavigate();
  const [userId,setUserId]=useState(-1);
  const [total,setTotal]=useState(0);
  let total1=0;
  
  const pluseOne=(data:any)=>{
    const JWT = Cookies.get('JWT');
    if(JWT)
    {
        axios.post("http://localhost:8080/cart",{
          userid:userId,
          productid:data.productid,
          quantity:data.quantity+1,
        },{ headers: {"Authorization" : `Bearer ${JWT}`} }).then((res)=>window.location.reload())
    }
  }
  const minusOne=(data:any)=>{
    const JWT = Cookies.get('JWT');
    if(data.quantity-1>0)
    {
        axios.post("http://localhost:8080/cart",{
          userid:userId,
          productid:data.productid,
          quantity:data.quantity-1,
        },{ headers: {"Authorization" : `Bearer ${JWT}`} }).then((res)=>window.location.reload())
    }
    else
    {
      axios.delete("http://localhost:8080/cart/"+data.id ,{ headers: {"Authorization" : `Bearer ${JWT}`} }).then((res)=>window.location.reload())
    }
}
 
  const handleCheckout=()=>{
    const JWT = Cookies.get('JWT');
    axios.post("http://localhost:8080/cart/checkout",cartItems ,{ headers: {"Authorization" : `Bearer ${JWT}`} }).then(res=>{
      navigate("/checkout");
    })
  }
  useEffect(()=>{
    const JWT = Cookies.get('JWT');
    if(JWT)
    {
            let email=jwt_decode<JwtPayload>(JWT);
      axios.get("http://localhost:8080/user/email/"+email.sub).then((res:any)=>{
        setUserId(res.data.userId);
        axios.get("http://localhost:8080/cart/"+res.data.userId,{ headers: {"Authorization" : `Bearer ${JWT}`} }).then((res1:any)=>{
          setCartItems([]);
          total1=0;
        res1.data.map((data:any)=>{
          setCartItems(element=>[...element,data]);  
           setTotalfun(data.price*data.quantity);
          
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
    const JWT = Cookies.get('JWT');
    axios.delete("http://localhost:8080/cart/"+data.id ,{ headers: {"Authorization" : `Bearer ${JWT}`} }).then((res)=>window.location.reload())
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
                    className="form-control form-control-sm" style={{width: '50px'}}   value={data.quantity} /> <img src="images/pluse.png" style={{width:'25px',height:'25px',marginRight:'5px'}} alt="" onClick={()=>pluseOne(data)} />
                    <img src="images/minus.png" style={{width:'25px',height:'25px'}} alt="" onClick={()=>minusOne(data)}/>
                </div>


              </td>
              <td className="align-middle">
                <p className="mb-0" style={{fontWeight: 500}}>{(data.quantity * data.price).toFixed(2)}</p>
              </td>
              <td>
                <button type="button" style={{marginTop:'50px'}} className="btn btn-outline-danger" onClick={()=>deleteCartItem(data)}>Delete</button>
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

