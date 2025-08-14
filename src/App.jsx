import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import ToolsoftheMonth from './components/ToolsoftheMonth.jsx';
import TrendingBrands from './components/TrendingBrands.jsx';
import Testimonials from './components/Testimonials.jsx';
import TrendingToolsAndApps from './components/TrendingtoolsandApps.jsx';
import Newsletter from './components/Newsletter.jsx';
import Agencies from './components/Agencies.jsx';
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <ToolsoftheMonth />
      <TrendingBrands />
      <TrendingToolsAndApps />
      <Agencies />
      <Newsletter />
      <Testimonials />
      <Footer />
    </>
  );
}
