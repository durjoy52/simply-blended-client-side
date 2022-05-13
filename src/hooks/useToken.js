import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");
    useEffect(() => {
        (async () => {
     if(user){
         const email = user.user?.email
        const { data } = await axios.post(
            "https://evening-mesa-58076.herokuapp.com/login",
            {email}
          );
          setToken(data);
          localStorage.setItem("accessToken", data);
     }
    })();
  }, [user]);
  return [token]
};

export default useToken;
