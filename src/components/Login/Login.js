import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  return (
    <div className="container mt-3">
        <SocialLogin></SocialLogin>
        <div className="addItemField">
      <div className="addItem">
        <h3>Please Login !</h3>
        <form>
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              required
            />
          </div>
          <div>
            <input type="password" name="password" placeholder="password" />
          </div>
          <div>
            <input style={{background:'indianred',color:'white'}} type="submit" value="Add Item" />
          </div>
      <p>Don't have an account ? <Link to='/register'>Register</Link></p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;