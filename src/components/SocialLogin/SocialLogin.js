import React from "react";
import { Button } from "react-bootstrap";
import google from '../../images/logo/Google_logo.png';
const SocialLogin = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
          <Button variant="secondary"><img src={google} width={60} alt="" />Google</Button>
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
    </div>
  );
};

export default SocialLogin;
