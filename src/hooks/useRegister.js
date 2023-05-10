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
          const response = await axios.post("http://localhost:4000/api/user/register", {
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