import Card from "../../components/card-component/card-component";
import Navbar from "../../components/navbar-component/navbar-component"
import "./homepage.css"
const Homepage=()=>{
    return (
        <>
                
       <Navbar isAdmin={false} isLoggedin={false}/>
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



   <div className="text-center top-heading" id="mobile"><h1>Mobile Phones</h1></div>
 
   <div className="row"  style={{marginLeft: "30px", marginRight: "30px"}}>
   {Array(5).fill(1).map((_, index) => (
      <Card image="images/mobile.jpg" cardTitle="Iphone 14 pro max" cardDescription="Some random text here" price="1,00,000" quantity="100"/> 
    ))}
   </div>

   
   <div className="text-center top-heading" id="laptop"><h1>Laptops</h1></div>
 
   <div className="row"  style={{marginLeft: "30px", marginRight: "30px"}}>
   {Array(5).fill(1).map((_, index) => (
     <Card image="images/laptop.jpg" cardTitle="Lenovo laptops" cardDescription="Some random text here" price="1,50,000" quantity="50"/> 
     ))}
   </div>

   
   <div className="text-center top-heading" id="bags"><h1>Bags</h1></div>
 
   <div className="row"  style={{marginLeft: "30px", marginRight: "30px"}}>
   {Array(5).fill(1).map((_, index) => (
    <Card image="images/bags.jpg" cardTitle="Leather Bag" cardDescription="Some random text here" price="5,000" quantity="30"/> 
    ))}
   </div>

   
   <div className="text-center top-heading" id="decorators"><h1>Decorators</h1></div>
 
   <div className="row"  style={{marginLeft: "30px", marginRight: "30px"}}>
   {Array(5).fill(1).map((_, index) => (
     <Card image="images/decorators.jpg" cardTitle="Decorators" cardDescription="Some random text here" price="500" quantity="25"/> 
     ))}
   </div>
        </>
    );
}
export default Homepage;