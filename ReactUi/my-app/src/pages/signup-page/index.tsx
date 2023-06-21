/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import "./signuppage.css"
import { useState } from "react";
import axios from "axios";
import { SignUpModel } from "../../models/SignUpModel";
const Signup=()=>{
  const [emailValid,setEmailValid]=useState(true);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [passwordConform,setPasswordConform]=useState("");
  const [passwordValid,setPasswordValid]=useState(true);
  const [passwordConformValid,setPasswordConformValid]=useState(true);
  const [name,setName]=useState("");
  function isValidEmail(email:string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function isPasswordValid(password:string){
    return (password.length >0);
  }
  function isPasswordConformValid(passwordConform:string){
    return (passwordConform===password);
  }
  function isFormValid(): boolean | undefined {
    if(name.length>0 && email.length >0 && password.length>0)
      return emailValid&&passwordValid&&passwordConformValid;
  }
  const handleChangeEmail = (event:any) => {
        setEmail(event.target.value);
        setEmailValid(isValidEmail(event.target.value));
  };
  const handleChangePassword=(event:any)=>{
        setPassword(event.target.value);
        setPasswordValid(isPasswordValid(event.target.value));
  }
  const handleChangePasswordConform=(event:any)=>{
    setPasswordConform(event.target.value);
    setPasswordConformValid(isPasswordConformValid(event.target.value));
}
  const handleChangeName=(event:any)=>{
    setName(event.target.value);
  }
  const navigate = useNavigate();
  const submit=(e:any)=>{
    e.preventDefault();
    let signUpModel=new SignUpModel();
    signUpModel.name=name;
    signUpModel.email=email;
    signUpModel.type="USER";
    signUpModel.password=password;
  axios.post("http://localhost:8080/register",signUpModel.serialize()).then(res=>
  {
    alert("Signed Up successfully");
    navigate("/login");
  }
 
).catch(res=> alert("Something went wrong try again"))
    
  }

  
    return (
        <div className="row">
    <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
      <div className="card auth">
        <div className="card-body auth-card">
          <div style={{textAlign: 'center'}}><h2>Customer SignUp</h2><div></div>
          <form >  
            <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="UserName" value={name} onChange={handleChangeName} />
            </div>
            <div className="form-group">
              <input type="text" name="email"  className="form-control" placeholder="Email" value={email} onChange={handleChangeEmail}/>
            {!emailValid &&  <div style={{color: 'red'}}>Email Must be Valid</div>}
            </div>
            <div className="form-group">
              <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={handleChangePassword}/>
             {!passwordValid && <div style={{color: 'red'}}>Password Must be Valid</div>}
            </div>
            <div className="form-group">
                <input type="password" name="conform_password" className="form-control" placeholder="confinrm password" value={passwordConform} onChange={handleChangePasswordConform}/>
              {!passwordConformValid &&  <div  style={{color: 'red'}}>Password didnt match</div>}
              </div>
            <div className="text-center">
              <input  type="submit" className="btn btn-my" value="sign up" disabled={!isFormValid()} onClick={submit} />
            </div>
            <div className="text-center sign-up">Owner Signup? <a href="" onClick={()=>navigate("/signup-admin")} >Click Here</a></div>
          </form>          
        </div>
      </div>
    </div>
  </div>
  </div>
 

    );
}
export default Signup;