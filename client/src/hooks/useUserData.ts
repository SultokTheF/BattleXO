import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import { userValidateEndpoint, tokenRefreshEndpoint } from '../constants/endpoints';
import User from '../types/User';

const useUserData = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    };

    const fetchUserData = async () => {
      try {
        const response = await axios.get(userValidateEndpoint, axiosConfig);
        setUserData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          try {
            const refreshToken = Cookies.get('refreshToken');
            if (!refreshToken) {
              console.error('No refresh token');
              return;
            }

            const refreshResponse = await axios.post(
              tokenRefreshEndpoint,
              { refresh: refreshToken }
            );

            const newAccessToken = refreshResponse.data.access;
            localStorage.setItem('accessToken', newAccessToken);

            const retryResponse = await axios.get(userValidateEndpoint, {
              headers: { Authorization: `Bearer ${newAccessToken}`, 'Content-Type': 'application/json' },
            });

            setUserData(retryResponse.data);
          } catch (refreshError) {
            console.error('Error refreshing token:', refreshError);
            handleTokenRefreshFailure();
          }
        } else {
          handleOtherErrors();
        }
      }
    };

    const handleTokenRefreshFailure = () => {
      localStorage.removeItem('accessToken');
      Cookies.remove('refreshToken');
      window.location.replace('/');
    };

    const handleOtherErrors = () => {
      localStorage.removeItem('accessToken');
      window.location.replace('/');
    };

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      // Handle the case when there is no access token
      return;
    }

    fetchUserData();
  }, []);

  return userData;
};

export default useUserData;
