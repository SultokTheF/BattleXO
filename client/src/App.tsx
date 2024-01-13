import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Menu } from "./components/layout";
import { Loader } from "./components/ui";

// Helpers
import useDelayedLoading from './services/useDelayedLoading';

// Pages 
import HomePage from './pages/HomePage';
import AuthorizationPage from './pages/AuthorizationPage';
import ProfilePage from './pages/ProfilePage';

import GamePage from './pages/GamePage';

const App: React.FC = () => {
  const loading = useDelayedLoading(0, 1000);

  return (
    <Suspense fallback={<Loader />}>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/home" element={ <HomePage />} />
          <Route path='/authorization' element={ <AuthorizationPage/> } />
          <Route path='/user/profile' element={ <ProfilePage/> } />
        
          <Route path='/game/:id' element={ <GamePage/> } />
        </Routes>
      )}
    </Suspense>
  );
};

export default App;
