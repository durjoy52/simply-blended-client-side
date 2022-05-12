import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  if (error) {
    return toast.error(error)
  }
  if (loading) {
    return <Loading/>
  }
  if (user) {
    navigate(from,{replace:true})
  }
  const handleLogin = event =>{
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value;
    signInWithEmailAndPassword(email,password)
  }
  return (
    <div className="container mt-3">
        <SocialLogin></SocialLogin>
        <div className="addItemField">
      <div className="addItem">
        <h3>Please Login !</h3>
        <form onSubmit={handleLogin}>
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
            <input style={{background:'indianred',color:'white'}} type="submit" value="Login" />
          </div>
      <p>Don't have an account ? <Link to='/register'>Register</Link></p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;