import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Menu } from "./components/layout";
import { Loader } from "./components/ui";

// Helpers
import useDelayedLoading from './helpers/useDelayedLoading';

// Pages 
import HomePage from './pages/HomePage';
import AuthorizationPage from './pages/AuthorizationPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';

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
          <Route path='/contact' element={ <ContactPage/> } />
          <Route path='/dashboard' element={ <DashboardPage/> } />
        </Routes>
      )}
    </Suspense>
  );
};

export default App;
