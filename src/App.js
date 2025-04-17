import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import Support from './pages/Support';
import ShippingPolicy from './pages/ShippingPolicy';
import '../src/pages/assets/css/styles.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/RefundPolicy" element={<RefundPolicy />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/ShippingPolicy" element={<ShippingPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;