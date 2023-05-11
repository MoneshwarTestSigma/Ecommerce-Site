/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";

interface NavbarProps{
  isLoggedin:boolean,
  isAdmin:boolean
}
const Navbar:React.FC<NavbarProps>=({isLoggedin=false,isAdmin=false})=>{
  const navigate = useNavigate();
    return (
    <>
    <nav className="navbar navbar-light fixed-top bg-dark ">

    <a className="navbar-brand text-light">Ecommerce Site</a>
    <form className="form-inline">
      <input  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{width: '425.6px'}}  />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
    </form>
    {(!isLoggedin &&
      <div >
    <button type="button" className="btn btn-success" style={{marginRight: '10px'}} onClick={()=>navigate("/login")}>Login</button>
    <button type="button" className="btn btn-primary" onClick={()=>navigate("/signup")}>Sign up</button>
</div>)}
{(isLoggedin &&
  <div  style={{color:'whitesmoke',fontSize: 'larger'}}>
  Welcome Moneshwar &nbsp;&nbsp;&nbsp;

   {(isAdmin && <button  type="button" style={{marginRight: '30px'}} className="btn btn-outline-primary" onClick={()=>navigate("/product-upload")}>Add Product</button>) } 

  <a href="" onClick={()=>navigate("/cart")}>
    <i className="fa" style={{fontSize:'24px', color: 'yellow'}}>&#xf07a;</i>
<span className='badge badge-warning' id='lblCartCount'> 2 </span>
  </a>
  <button type="button"  style={{marginLeft: '30px' }} className="btn btn-outline-danger">⬅️ Log out</button>


</div>
)}

</nav>
</>
);
}
export default Navbar;