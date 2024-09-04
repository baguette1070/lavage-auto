import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./header/Header";
import Body from './body/Body.jsx';
import About from "./About/About";
import Prestations from "./prestations/Prestations.jsx";
import Faq from "./faq/Faq";
import Contact from "./contact/Contact.jsx";
import Footer from "./footer/Footer.jsx";
import Prix from './prix/Prix.jsx';

function App() {
  return (
    <>
      <Header />
      <Body />
      <About />
      <Prestations></Prestations>
      <Routes>
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/prix" element={<Prix />} />
        {/* Ajoutez ici d'autres routes si nécessaire */}
      </Routes>
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
