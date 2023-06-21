import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductModel } from "../../models/ProductModel";

const AddProduct=()=>{
  const JWT = Cookies.get('user');
  const navigate =useNavigate();
  const [name,setName]=useState("");
  const [type,setType]=useState("MOBILE");
  const [description,setDescription]=useState("");
  const [price,setPrice]=useState("");
  const [quantity,setQuantity]=useState("");
  const [file,setFile]=useState(null as any);
  const handleChangeName=(event:any)=>{
      setName(event.target.value);
  }
  const handleChangeType=(event:any)=>{
    setType(event.target.value);
    console.log(event.target.value);
  }
  const handleChangeDescription=(event:any)=>{
    setDescription(event.target.value);
  }
  const handleChangePrice=(event:any)=>{
    setPrice(event.target.value);
  }
  const handleChangeQuantity=(event:any)=>{
    setQuantity(event.target.value);
  }
  const handleChangeImage=(event:any)=>{
    setFile(event.target.files[0]);
  }

  const submitProduct=(event:any)=>{
    let productModel=new ProductModel();
    productModel.name=name;
    productModel.price=price;
    productModel.description=description;
    productModel.count=quantity;
    productModel.category=type;
    event.preventDefault();
    axios.post("http://localhost:8080/product",productModel.serialize(),{ headers: {"Authorization" : `Bearer ${JWT}`} }).then(res=>{
        uploadImage(res.data.id);
    })
  }
  const uploadImage=(id:number)=>{
      const formData=new FormData();
      formData.append("file",file,file.name);
      axios.post("http://localhost:8080/images?file="+file.name+"&id="+id,formData,{ headers: {"Authorization" : `Bearer ${JWT}`} }).then((res)=>{
        navigate("/");
      }).catch(res=>alert("Something Went Wrong"));
  }
  function isFormValid(): boolean | undefined {
    if(name.length>0 && price.length>0  && description.length>0 && quantity.length>0 && file!=null)
      return true;
    return false;
  }

    return (
        <div className="row">
    <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
      <div className="card auth">
        <div className="card-body auth-card">
        <div style={{textAlign: 'center'}}><h2>Add Product Form</h2><div>
          <form >  
            <div className="form-group">
              <input type="text"  className="form-control" placeholder="Product Name" value={name} onChange={handleChangeName}/>
            </div>
            <div className="form-group">
                <label>Product Type: </label>
                <select value={type} onChange={handleChangeType} >
                    <option value="MOBILE">MOBILE</option>
                    <option value="LAPTOP">LAPTOP</option>
                    <option value="BAG">BAG</option>
                    <option value="DECORATORS">DECORATORS</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text"  className="form-control" placeholder="Product description" value={description} onChange={handleChangeDescription}/>
              </div>
              <div className="form-group">
                <input type="number"  className="form-control" placeholder="Product Price" value={price} onChange={handleChangePrice}/>
              </div>
            
            <div className="form-group">
                <input type="number"  className="form-control" placeholder="Product Quantity" value={quantity} onChange={handleChangeQuantity}/>
              </div >
             <label >Image:</label>
                <input type="file"  onChange={handleChangeImage} />
                <br/>
                <br/>
              <div className="text-center">
                <input type="submit" className="btn btn-my" value="Add Product" disabled={!isFormValid()} onClick={submitProduct}/>
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
