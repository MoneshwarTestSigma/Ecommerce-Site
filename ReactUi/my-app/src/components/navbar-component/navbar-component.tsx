/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import jwt_decode, { JwtPayload } from "jwt-decode";
import axios from "axios";
interface NavbarProps{
  onSearch:(search:string)=>void
  setUserId:(id:Number)=>any
}
const Navbar:React.FC<NavbarProps>=({onSearch,setUserId})=>{

  const navigate = useNavigate();
  const [search,setSearch]=useState("");
  const [name,setName]=useState("");
  const [isLoggedin,setIsLoggedIn]=useState(false);
  const [isAdmin,setIsAdmin]=useState(false);
  const [cartCount,setCartCount]=useState(0);
  useEffect(()=>{
    const JWT = Cookies.get('JWT');
    if(JWT)
    {
      setIsLoggedIn(true);
      let email=jwt_decode<JwtPayload>(JWT);
      axios.get("http://localhost:8080/user/email/"+email.sub).then((res:any)=>{
        setName(res.data.name);
        if(res.data.type==="ADMIN")
        {
          setIsAdmin(true);
        }
        setUserId(Number(res.data.userId))
        axios.get("http://localhost:8080/cart/"+res.data.userId,{ headers: {"Authorization" : `Bearer ${JWT}`} }).then((res:any)=>{
          setCartCount(res.data.length);
        })
          
      })
     
    }
  },[]);
  const logout=()=>{
    setIsLoggedIn(false);
    Cookies.remove('JWT');
  }
  
  const handleChangeSearech=(event:any)=>{
    
    setSearch(event.target.value);
    if(event.target.value.length===0)
    {
      onSearch("");
    }
  }
  const click=(event:any)=>{
    event.preventDefault();
    onSearch(search);
  }
    return (
    <>
    <nav className="navbar navbar-light fixed-top bg-dark ">

    <a className="navbar-brand text-light">Ecommerce Site</a>
    <form className="form-inline">
      <input  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChangeSearech} style={{width: '425.6px'}}  />
      <button className="btn btn-outline-success my-2 my-sm-0"  onClick={click}>Search</button>
    </form>
    {(!isLoggedin &&
      <div >
    <button type="button" className="btn btn-success" style={{marginRight: '10px'}} onClick={()=>navigate("/login")}>Login</button>
    <button type="button" className="btn btn-primary" onClick={()=>navigate("/signup")}>Sign up</button>
</div>)}
{(isLoggedin &&
  <div  style={{color:'whitesmoke',fontSize: 'larger'}}>
  Welcome {name} &nbsp;&nbsp;&nbsp;

   {(isAdmin && <button  type="button" style={{marginRight: '30px'}} className="btn btn-outline-primary" onClick={()=>navigate("/product-upload")}>Add Product</button>) } 

  <a href="" onClick={()=>navigate("/cart")}>
    <i className="fa" style={{fontSize:'24px', color: 'yellow'}}>&#xf07a;</i>
<span className='badge badge-warning' id='lblCartCount'> {cartCount} </span>
  </a>
  <button type="button"  style={{marginLeft: '30px' }} className="btn btn-outline-danger" onClick={logout}>⬅️ Log out</button>


</div>
)}

</nav>
</>
);
}
export default Navbar;