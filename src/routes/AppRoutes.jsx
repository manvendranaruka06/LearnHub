import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import ResourceDetails from '../pages/ResourceDetails';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import StepDetails from '../pages/StepDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />
      <Route path="/dashboard/:roadmapId/step/:stepId" element={<StepDetails />} />
      <Route path="/resource/:id" element={<ResourceDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
