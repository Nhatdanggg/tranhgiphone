import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedNews from './components/FeaturedNews';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';
import TrangIphone from './components/trangiphone';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <Navbar /> */}
      <Hero />
      <FeaturedNews />
      <LatestNews />
      <Footer />
      <TrangIphone/>
    </div>
  );
}

export default App;
