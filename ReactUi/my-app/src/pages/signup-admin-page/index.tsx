/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";

const SignupAdmin=()=>{
    const navigate = useNavigate();
    return (
        <div className="row">
  <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
    <div className="card auth">
      <div className="card-body auth-card">
        <div style={{textAlign: 'center'}}><h2>Owner SignUp</h2></div>
        <form>
          <div className="form-group">
            <input type="text" name="name" className="form-control" placeholder="UserName"/>
          </div>
          <div className="form-group">
            <input type="text" name="email" className="form-control" placeholder="Email"/>
            <div style={{color: 'red'}}>Email Must be Valid</div>
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder="Password"/>
            <div style={{color: 'red'}}>Password Must be Valid</div>
          </div>
          <div className="form-group">
            <input type="password" name="conform_password" className="form-control" placeholder="Confirm password"/>
            <div style={{color: 'red'}}>Password didn't match</div>
          </div>
          <div className="text-center">
            <input type="submit" className="btn btn-my" value="Sign Up" />
          </div>
          <div>
            Signed up Successfully
            <a>Log In</a>
          </div>
          <div className="text-center sign-up">Customer Signup? <a href="" onClick={()=>navigate("/signup")}>Click Here</a></div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
}
export default SignupAdmin;