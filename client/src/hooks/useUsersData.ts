import { useState, useEffect } from "react";
import axios from "axios";

import User from "../types/User";
import { userEndpoints } from "../constants/endpoints";

const useUsersData = (username: string) => {
  const [users, setUsers] = useState<(User & { profile_image: number })[]>([]);

  useEffect(() => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get(userEndpoints, axiosConfig);
        setUsers(response.data);;
      } catch (error) {
        console.log("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  return users.find((user) => user.username === username);
}

export default useUsersData