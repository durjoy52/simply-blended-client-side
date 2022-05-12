import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { auth } from "../../firebase/firebase.init";

const EmailVerification = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (sending) {
    return <p>Sending...</p>;
  }
  return (
    <div className="App">
      <button
        onClick={async () => {
          await sendEmailVerification();
          toast("Sent email");
        }}
      >
        Verify email
      </button>
    </div>
  );
};

export default EmailVerification;
