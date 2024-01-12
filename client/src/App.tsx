import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Menu } from "./components/layout";
import { Loader } from "./components/ui";

// Helpers
import useDelayedLoading from './helpers/useDelayedLoading';

// Pages 
const HomePage = React.lazy(() => import("./pages/HomePage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));

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
          <Route path='/register' element={ <RegisterPage/> } />
          <Route path='/contact' element={ <ContactPage/> } />
          <Route path='/dashboard' element={ <DashboardPage/> } />
        </Routes>
      )}
    </Suspense>
  );
};

export default App;
