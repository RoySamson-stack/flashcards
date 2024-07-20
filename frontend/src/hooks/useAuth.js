import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const useAuth = () => {
  const { user, login, logout } = useContext(AuthContext);

  const fetchProtectedData = async (endpoint) => {
    try {
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching protected data', error);
      if (error.response.status === 401) {
        logout();
      }
    }
  };

  return { user, login, logout, fetchProtectedData };
};

export default useAuth;
