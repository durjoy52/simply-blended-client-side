import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.init";
import useToken from "../../hooks/useToken";
import google from "../../images/logo/Google_logo.png";
import Loading from "../Loading/Loading";
import './SocialLogin.css';
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth,{sendEmailVerification:true});
  const [token] = useToken(user)
  const from = location.state?.from?.pathname || "/";

  if(loading){
    return <Loading></Loading>
  }
  let errorElement
  if (error) {
    errorElement = <p className="text-danger text-center">Error: {error.message}</p>
  }
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <button className="google" onClick={() => signInWithGoogle()}>
          <img src={google} width={45} alt="" />
          Google
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{ width: "15%", height: "2px", backgroundColor: "#6495ed" }}
        ></div>
        <p className="mx-1 mt-3">Or</p>
        <div
          style={{ width: "15%", height: "2px", backgroundColor: "#6495ed" }}
        ></div>
      </div>
        {errorElement}
    </div>
  );
};

export default SocialLogin;
