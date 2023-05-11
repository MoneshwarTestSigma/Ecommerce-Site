/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import "./loginpage.css";
const LoginPage=()=>{
  const navigate = useNavigate();
    return (
<div >
<div className="row">
    <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
      <div className="card auth">
        <div >
          Logged In successfully
        </div>
        <div className="card-body auth-card">
        <div style={{textAlign: 'center'}}><h2>Login</h2><div>
          <form >  
            <div className="form-group">
              <input type="email"  name="email" className="form-control" placeholder="Email"/>
            </div>
            <div style={{color:'red'}}>Email Must be Valid</div>
            <div className="form-group">
              <input type="password" name="password" className="form-control" placeholder="Password"/>
              <div style={{color: 'red'}}>Password can't be empty</div>
              </div>
            <div className="text-center">
              <input type="submit" className="btn btn-my" value="Login"/>
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
