const AddProduct=()=>{
    return (
        <div className="row">
    <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
      <div className="card auth">
        <div className="card-body auth-card">
        <div style={{textAlign: 'center'}}><h2>Add Product Form</h2><div>
          <form >  
            <div className="form-group">
              <input type="text"  className="form-control" placeholder="Product Name" />
            </div>
            <div className="form-group">
                <label>Product Type: </label>
                <select >
                    <option value="MOBILE">MOBILE</option>
                    <option value="LAPTOP">LAPTOP</option>
                    <option value="BAG">BAG</option>
                    <option value="DECORATORs">DECORATORS</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text"  className="form-control" placeholder="Product description" />
              </div>
              <div className="form-group">
                <input type="number"  className="form-control" placeholder="Product Price"/>
              </div>
            
            <div className="form-group">
                <input type="number"  className="form-control" placeholder="Product Quantity"/>
              </div >
             <label >Image:</label>
                <input type="file" />
                <br/>
                <br/>
              <div className="text-center">
                <input type="submit" className="btn btn-my" value="Add Product"/>
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>

    );
}
export default AddProduct;
