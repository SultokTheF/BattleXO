import User from "../../types/User";

// Define types for state and action
interface UserState {
  userData: User | null;
  isLoggedIn: boolean;
}

// Define actions
interface SetUserAction {
  type: 'SET_USER';
  payload: User;
}

interface ClearUserAction {
  type: 'CLEAR_USER';
}

interface SetAuthStatusAction {
  type: 'SET_AUTH_STATUS';
  payload: boolean;
}

type UserAction = SetUserAction | ClearUserAction | SetAuthStatusAction;

// Initial state
const initialState: UserState = {
  userData: null,
  isLoggedIn: false,
};

// Reducer
const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, userData: action.payload };
    case 'CLEAR_USER':
      return { ...state, userData: null };
    case 'SET_AUTH_STATUS':
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export default userReducer;
