import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleRegister(event) {
    event.preventDefault();
    const user = { email, password };
    event.target.reset();
  }

  return (
    <div className="container mt-3 ">
          <SocialLogin></SocialLogin>
          <div className="addItemField">
      <div className="addItem">
        <h3>Please Register !</h3>
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
            <input type="password" name="password" placeholder="password" required/>
          </div>
          <div>
            <input type="password" name="ConfirmPassword" placeholder="ConfirmPassword" required/>
          </div>
          <div>
            <input style={{background:'indianred',color:'white'}} type="submit" value="Add Item" />
          </div>
      <p>Already have an account ? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;
