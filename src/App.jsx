import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import ToolsoftheMonth from './components/ToolsoftheMonth.jsx';
import TrendingBrands from './components/TrendingBrands.jsx';
import Testimonials from './components/Testimonials.jsx';
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <ToolsoftheMonth />
      <TrendingBrands />
      <Testimonials />
      <Footer />
    </>
  );
}
