import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import EmailVerification from '../components/EmailVerification/EmailVerification';
import Loading from '../components/Loading/Loading';
import { auth } from '../firebase/firebase.init';

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    
    if(!user.emailVerified){
      return <EmailVerification/>
    }
  if(loading){
      return <Loading/>
  }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
};

export default RequireAuth;