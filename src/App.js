// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedNews from './components/FeaturedNews';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';
import TrangIphone from './components/trangiphone';
import NewsDetail from './components/NewsDetail';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      
      <Routes>
        <Route path="/" element={
          <>
            <FeaturedNews />
            <LatestNews />
            <TrangIphone />
          </>
        } />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
