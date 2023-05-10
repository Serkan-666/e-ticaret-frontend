import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import axios from 'axios';

export const useRegister=()=>{

    const [err,setErr]=useState(null)

    const [loading,setLoading]=useState(null)

    const {dispatch} = useAuthContext() 

    const register = async (email, password) => {
        setLoading(true);
        setErr(null);
      
        try {
          const response = await axios.post("https://e-ticaret-backend-vugbq9d2y-serkan-666.vercel.app/api/user/register", {
            email: email,
            password: password,
          });
          localStorage.setItem("user", JSON.stringify(response.data));
          dispatch({ type: "LOGIN", payload: response.data });
        } catch (error) {
          setErr(error.response.data.hata);
        }
      
        setLoading(false);
      };


    return {register,loading,err}

}
