import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipesPage from './pages/RecipesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipesPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;