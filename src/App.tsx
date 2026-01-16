
import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { LandingPage } from './components/pages/LandingPage';
import { ProductDetail } from './components/pages/ProductDetail';

export default function App() {
  return (
    <Router>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pack/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
