import React from 'react';
import Header  from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';

export default function App() {
  return (
    <>
   
      <Header/>
      <main className="flex-grow bg-gray-50 py-12">
  …      <Hero/>
        </main>
    
       <Footer/>
     
    
    </>
  );
}
