/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import "./loginpage.css";
import { useState } from "react";
import axios from "axios";
const LoginPage=()=>{
  const [emailValid,setEmailValid]=useState(true);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [passwordValid,setPasswordValid]=useState(true);
  function isValidEmail(email:string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function isPasswordValid(password:string){
    return (password.length >0);
  }

  const handleChangeEmail = (event:any) => {
        setEmail(event.target.value);
        setEmailValid(isValidEmail(event.target.value));
  };
  const handleChangePassword=(event:any)=>{
        setPassword(event.target.value);
        setPasswordValid(isPasswordValid(event.target.value));
  }
  const submit=(event:any)=>{
    event.preventDefault();
    axios.post("http://localhost:8080/authenticate",{
      email:email,
      password:password
    }).then((res)=>{
      if(res.status===200)
        {
          alert("LoggedIn Successfully");
          navigate("/");
        }
        else
        {
          alert("Invalid credentials");
        }
    }
    
    );
  }

  const navigate = useNavigate();
    return (
<div >
<div className="row">
    <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
      <div className="card auth">
        <div className="card-body auth-card">
        <div style={{textAlign: 'center'}}><h2>Login</h2><div>
          <form >  
            <div className="form-group">
              <input type="email"  name="email" className="form-control" placeholder="Email" value={email} onChange={handleChangeEmail}/>
            </div>
            {!emailValid && <div style={{color:'red'}}>Email Must be Valid</div> }
            <div className="form-group">
              <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={handleChangePassword}/>
              {!passwordValid && <div style={{color: 'red'}}>Password can't be empty</div>}
              </div>
            <div className="text-center">
              <input type="submit" className="btn btn-my" value="Login" onClick={submit}/>
            </div>
          </form>
          <div className="text-center sign-up">
            Don`t have an account ? <a href="" onClick={()=>navigate("/signup")}>Sign Up</a> here!!.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    );
}
export default LoginPage;
