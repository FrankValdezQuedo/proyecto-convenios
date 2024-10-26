import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import AcercaDe from "./componentes/AcerdeDe";
import Convenios from "./componentes/Convenios";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AcercaDe />} />
          <Route path="/convenios" element={<Convenios />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
