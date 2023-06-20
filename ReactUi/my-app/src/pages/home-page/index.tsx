/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import Card from "../../components/card-component/card-component";
import Navbar from "../../components/navbar-component/navbar-component";
import Axios from 'axios';
import "./homepage.css"
import { useEffect, useState } from "react";
import React from "react";

const Homepage=(props:any)=>{
  const [postMobile,setPostMobile]=useState([] as any[]);
  const [postLaptop,setPostLaptop]=useState([] as any[]);
  const [postBags,setPostBags]=useState([] as any[]);
  const [postDecorator,setPostDecorator]=useState([] as any[]);
  const [userId,setUserId]=useState(1);
  const [startVariable,setStateVariable]=useState(5);
  let temp=0;
  const refresh=()=>{
    if(temp===1)
      temp=0;
    else
      temp=1;
    setStateVariable(temp);
  }
  useEffect(() => {

    getProducts();
  }, []);
  const getUserId=()=>{
    return userId;
  }
  const Search=(search:string)=>{
   if(search.length===0)
   {
    getProducts();
    return ;
   }
    Axios.get("http://localhost:8080/product?query=name:"+search).then(
      (res)=>{
        fill(res);
      }
    )
  }
  const fill=(res:any)=>{
    setPostBags([]);
    setPostLaptop([]);
    setPostDecorator([]);
    setPostMobile([]);
    res.data.map((data: any)=>{
      if(data.category==="MOBILE")
      {
        setPostMobile(current=>[...current,data]);
      }
      else if(data.category==="LAPTOP")
      {
        setPostLaptop(current=>[...current,data]);
      }
      else if(data.category==="BAG")
      {
        setPostBags(current=>[...current,data]);
      }
      else if(data.category==="DECORATORS")
      {
        setPostDecorator(current=>[...current,data]);
      }
    })
  }
    const getProducts=()=>{
      Axios.get("http://localhost:8080/product/inventory").then(
        (res)=>{
            fill(res);
        }
      )
    }
    const setUserIdFun=(id:any)=>{
      setUserId(id);
    }
    
    return (
        <>
        
                
       <Navbar  onSearch={Search} setUserId={setUserIdFun} refresh={startVariable}/>
       <div className="row" style={{ borderStyle: 'outset', borderColor: '#f3f6f9', marginTop: '3.5rem', backgroundColor: '#f1f6f9' }}>
  <div className="col-lg-4 col-md-4 col-sm-4">
    <h1 style={{ paddingTop: '30px' }}>Top Categories</h1>
  </div>
  <div className="col-lg-2 col-md-2 col-sm-2 text-center">
    <a href="#mobile" className="box-category">
      <div style={{ maxWidth: '10rem', maxHeight: '10rem', borderRadius: '15%' }}>
        <img  src="images/mobile.jpg" className="card-img-top" alt="mobile" style={{ height: '5.5rem', width: '6rem', marginTop: '1rem' }} />
        <div>
         <p className="text-center">Mobile</p>
        </div>
      </div>
    </a>
  </div>
  <div className="col-lg-2 col-md-2 col-sm-2 text-center">
    <a href="#laptop" className="box-category">
      <div style={{ maxWidth: '10rem', maxHeight: '10rem', borderRadius: '15%' }}>
        <img src="images/laptop.jpg" className="" alt="laptop" style={{ height: '6rem', width: '6rem' }} />
        <div>
          <p className="text-center">Laptops</p>
        </div>
      </div>
    </a>
  </div>
  <div className="col-lg-2 col-md-2 col-sm-2 text-center">
    <a href="#bags" className="box-category">
      <div style={{ maxWidth: '7rem', maxHeight: '7rem', borderRadius: '15%' }}>
        <img src="images/bags.jpg" className="card-img-top" alt="bags" style={{ height: '6rem', width: '6rem' }} />
        <div>
          <p className="text-center">Bags</p>
        </div>
      </div>
    </a>
  </div>
  <div className="col-lg-2 col-md-2 col-sm-2 text-center">
    <a href="#decorators" className="box-category">
      <div style={{ maxWidth: '7rem', maxHeight: '7rem', borderRadius: '15%' }}>
        <img src="images/decorators.jpg" className="card-img-top" alt="decorators" style={{ height: '6rem', width: '6rem' }} />
        <div>
          <p className="text-center">Decorators</p>
        </div>
      </div>
    </a>
  </div>
</div>
{postMobile.length>0 &&  <div className="text-center top-heading" id="mobile"><h1>Mobile Phones</h1></div>}
 
   <div className="row"  style={{marginLeft: "30px", marginRight: "30px"}}>
   {postMobile.map((data, index) => (
      <Card key={index} image={(data.imageURL==="noImage")?"images/mobile.jpg":data.imageURL} cardTitle={data.name} cardDescription={data.description} price={data.price} quantity={data.count} id={data.id} getUserId={getUserId} refresh={refresh}/> 
    ))}
   </div>  
   {postLaptop.length>0 && <div className="text-center top-heading" id="laptop"><h1>Laptops</h1></div>}
 
   <div className="row"  style={{marginLeft: "30px", marginRight: "30px"}}>
   {postLaptop.map((data, index) => (
     <Card key={index} image={(data.imageURL==="noImage")?"images/laptop.jpg":data.imageURL} cardTitle={data.name} cardDescription={data.description} price={data.price} quantity={data.count} id={data.id} getUserId={getUserId} refresh={refresh}/> 
     ))}
   </div>

   
   {postBags.length>0 && <div className="text-center top-heading" id="bags"><h1>Bags</h1></div>}
 
   <div className="row"  style={{marginLeft: "30px", marginRight: "30px"}}>
   {postBags.map((data, index) => (
    <Card key={index} image={(data.imageURL==="noImage")?"images/bags.jpg":data.imageURL} cardTitle={data.name} cardDescription={data.description} price={data.price} quantity={data.count} id={data.id} getUserId={getUserId} refresh={refresh}/> 
    ))}
   </div>

   
   {postDecorator.length>0 && <div className="text-center top-heading" id="decorators"><h1>Decorators</h1></div>}
 
   <div className="row"  style={{marginLeft: "30px", marginRight: "30px"}}>
   {postDecorator.map((data, index) => (
     <Card key={index} image={(data.imageURL==="noImage")?"images/decorators.jpg":data.imageURL} cardTitle={data.name} cardDescription={data.description} price={data.price} quantity={data.count} id={data.id} getUserId={getUserId} refresh={refresh}/>  
     ))}
   </div>
        </>
    );
}
export default Homepage;