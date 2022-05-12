import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [userName,setUserName] =useState('')
  const [isAgree,setIsAgree] = useState(true)
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error1,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  if(loading || updating){
    return <Loading/>
  }
  if(error || error1){
    toast.error(error)
  }
  if(user){
    navigate('/home')
  }
  const handleCreateUser = async(event) =>{
event.preventDefault()
await createUserWithEmailAndPassword(email,password)
await updateProfile({displayName:userName})
console.log(email,password,userName)

}
  return (
    <div className="container mt-3 ">
          <SocialLogin></SocialLogin>
          <div className="addItemField">
      <div className="addItem">
        <h3>Please Register !</h3>
        <form onSubmit={handleCreateUser}>
          <div>
            <input
            onBlur={(e)=>setUserName(e.target.value)}
              type="text"
              name="name"
              placeholder="name"
              required
            />
          </div>
          <div>
            <input
            onBlur={(e)=>setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="email"
              required
            />
          </div>
          <div>
            <input onBlur={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="password" minLength={6} required/>
          </div>
          <div>
            <input style={isAgree ?{ background:'#ebd4d1',color:'black'}:{background:'indianred',color:'white'}} type="submit" value="Register" disabled={isAgree} />
          </div>
        </form>
        <div>
        <input style={{width:'2rem'}} onClick={()=>setIsAgree(!isAgree)} type="checkbox" name="check" id="check" />
        <label htmlFor="check">agree all terms and conditions</label>
        </div>
      <span>Already have an account ? <Link to='/login'>Login</Link></span>
      </div>
    </div>
    </div>
  );
};

export default Register;
