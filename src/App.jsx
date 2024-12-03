import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import AcercaDe from "./componentes/AcerdeDe";
import Convenios from "./componentes/Convenios";
import Contactos from "./componentes/Contactos";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AcercaDe />} />
          <Route path="/convenios" element={<Convenios />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
