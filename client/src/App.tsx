import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Menu } from "./components/layout";
import { Loader } from "./components/ui";
import store from './store';

// Helpers
import useDelayedLoading from './hooks/useDelayedLoading';

// Pages 
import HomePage from './pages/HomePage';
import AuthorizationPage from './pages/AuthorizationPage';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';

import GamePage from './pages/GamePage';

const App: React.FC = () => {
  const loading = useDelayedLoading(0, 1000);

  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/home" element={ <HomePage />} />
            <Route path='/authorization' element={ <AuthorizationPage/> } />
            <Route path='/user/profile/:username' element={ <ProfilePage/> } />
            <Route path='/chat' element={ <ChatPage/> } />
          
            <Route path='/game/:id' element={ <GamePage/> } />
          </Routes>
        )}
      </Suspense>
    </Provider>
  );
};

export default App;
