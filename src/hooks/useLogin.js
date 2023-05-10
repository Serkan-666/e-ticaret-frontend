import axios from 'axios';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    setErr(null);
    
    try {
      const response = await axios.post('https://e-ticaret-backend-vugbq9d2y-serkan-666.vercel.app//api/user/login', {
        email: email,
        password: password,
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      dispatch({ type: 'LOGIN', payload: response.data });
    } catch (error) {
      setErr(error.response.data.hata);
    }

    setLoading(false);
  };

  return { login, loading, err };
};
