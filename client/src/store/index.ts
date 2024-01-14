import { createStore, combineReducers, Store } from 'redux';
import userReducer from './reducers/userReducer';

// Define the RootState
interface RootState {
  user: ReturnType<typeof userReducer>;
  // Add other slices of state as needed
}

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers as needed
});

// Create store with RootState
const store: Store<RootState> = createStore(rootReducer);

export default store;