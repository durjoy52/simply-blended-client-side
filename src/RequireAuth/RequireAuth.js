import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { auth } from '../firebase/firebase.init';

const RequireAuth = ({ children }) => {
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    
    if(loading || sending){
      return <Loading/>
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  if(!user?.emailVerified){
    <div className='d-flex justify-content-center align-items-center'>
<div>
  <p className='text-danger'>your email is not verified</p>
  <button className='btn btn-primary' onClick={async()=>{ await sendEmailVerification();toast('sent email')}}>verify</button>
</div>
    </div>
  }
    return children;
};

export default RequireAuth;