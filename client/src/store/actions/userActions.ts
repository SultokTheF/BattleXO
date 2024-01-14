import User from "../../types/User";

export const setUser = (userData: User) => ({
  type: 'SET_USER',
  payload: userData,
});

export const clearUser = () => ({
  type: 'CLEAR_USER',
});

export const setAuthStatus = (isLoggedIn: boolean) => ({
  type: 'SET_AUTH_STATUS',
  payload: isLoggedIn,
});
