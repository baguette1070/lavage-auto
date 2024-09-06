import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./header/Header";
import Body from './body/Body.jsx';
import About from "./About/About";
import Prestations from "./prestations/Prestations.jsx";
import Faq from "./faq/Faq";
import Contact from "./contact/Contact.jsx";
import Footer from "./footer/Footer.jsx";
import Prix from './prix/Prix.jsx';

function App() {
  const [showElements, setShowElements] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/prix') {
      setShowElements(false);
    } else {
      setShowElements(true);
    }
  }, [location.pathname]);

  return (
    <>
      {showElements && (
        <>
          <Header setShowElements={setShowElements} />
          <Body />
          <About />
          <Prestations setShowElements={setShowElements} />
          <Faq />
          <Contact />
          <Footer />
        </>
      )}

      <Routes>
        <Route path="/prix" element={<Prix />} />
        {/* Ajoutez ici d'autres routes si nécessaire */}
      </Routes>
    </>
  );
}

export default App;
