import axios from "axios";
import { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const [signInWithEmailAndPassword, user, loading, error1] =
    useSignInWithEmailAndPassword(auth);

  if (loading || sending) {
    return <Loading />;
  }
  if (error) {
    toast.error(error.message, { id: "error" });
  }
  if (error1) {
    toast.error(error1.message, { id: "error1" });
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data);
  };
  const passwordReset = () => {
    if (email) {
      sendPasswordResetEmail(email);
      toast("sent password Reset");
    } else {
      toast.error("please enter your email address", { id: "error" });
    }
  };
  return (
    <div className="container mt-3">
      <SocialLogin></SocialLogin>
      <div className="addItemField">
        <div className="addItem">
          <h3>Please Login !</h3>
          <form onSubmit={handleLogin}>
            <div>
              <input
                onBlur={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="email"
                required
              />
            </div>
            <div>
              <input
                onBlur={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div>
              <span>Forget password?</span>
              <button className="btn btn-link" onClick={passwordReset}>
                reset password
              </button>
              <input
                style={{ background: "indianred", color: "white" }}
                type="submit"
                value="Login"
              />
            </div>
            <p>
              Don't have an account ? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
