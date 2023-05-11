const Cart=()=>{
    return (
        <>
<nav className="navbar navbar-light fixed-top bg-dark ">

<a className="navbar-brand text-light">Ecommerce Site</a>
<div style={{color:'aliceblue' ,fontSize: '30px'}}>Welcome to Cart</div>
<a href="#" className="previous">&laquo; Back to Shopping</a>

</nav>

<section  className="h-100 h-custom">
<div  className="text-center" style={{marginTop: '100px'}}>
<h1>Cart is Empty</h1>
</div>
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

            <tr >
              <th scope="row">
                <div className="d-flex align-items-center">
                  <img src="..." className="img-fluid rounded-3"
                    style={{width: '120px',marginRight:'20px'}} alt="image"/>
                  <div className="flex-column ms-4">
                    <p className="mb-2">cart Item</p>
                  </div>
                </div>
              </th>
              <td className="align-middle">
                <p className="mb-0" style={{fontWeight: 500}}>catagory</p>
              </td>
              <td className="align-middle">
                <div className="d-flex flex-row">



                  <input id="form1" min="1"
                    className="form-control form-control-sm" style={{width: '50px'}}  type="number"/>
                </div>


              </td>
              <td className="align-middle">
                <p className="mb-0" style={{fontWeight: 500}}>quantity * i.price</p>
              </td>
              <td>
                <button type="button" className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card shadow-2-strong mb-5 mb-lg-0" style={{borderRadius: '16px'}}>
        <div className="card-body p-4">

          <div className="row">
            <div className="col-lg-12 col-xl-12">
              <div className="d-flex justify-content-between" style={{fontWeight: 500}}>
                <p className="mb-2">Subtotal</p>
                <p className="mb-2">total</p>
              </div>

              <div className="d-flex justify-content-between" style={{fontWeight: 500}}>
                <p className="mb-0">Shipping</p>
                <p className="mb-0">30</p>
              </div>

              <hr className="my-4"/>

              <div className="d-flex justify-content-between mb-4" style={{fontWeight: 500}}>
                <p className="mb-2">Total (tax included)</p>
                <p className="mb-2">total+30 </p>
              </div>

              <button  type="button" className="btn btn-primary " style={{float: 'right'}}>
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
</section>


</>


    );
}
export default Cart;

