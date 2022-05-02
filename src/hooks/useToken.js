import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      if (email) {
        const url = `https://tranquil-refuge-32723.herokuapp.com/login`;
        const { data } = await axios.post(url, { email });
        setToken(data.token);
        localStorage.setItem("accessToken", data.token);
      }
    };
    getToken();
  }, [user]);
  return [token];
};
export default useToken;
