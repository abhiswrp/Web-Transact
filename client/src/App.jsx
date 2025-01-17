import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Transactions from './components/Transactions';
import Footer from './components/Footer';
import Wallets from './components/Wallets';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/wallets" element={<Wallets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
