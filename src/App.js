import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

// ✅ Import service detail pages
import TreeRemoval from './components/services/TreeRemoval';
import TreeTrimming from './components/services/TreeTrimming';
import StumpGrinding from './components/services/StumpGrinding';
import LandClearing from './components/services/LandClearing';
import Landscaping from './components/services/Landscaping';
import EmergencyServices from './components/services/EmergencyServices';
import TreeHealthEval from './components/services/TreeHealthEval';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Service detail pages */}
        <Route path="/services/tree-removal" element={<TreeRemoval />} />
        <Route path="/services/tree-trimming" element={<TreeTrimming />} />
        <Route path="/services/stump-grinding" element={<StumpGrinding />} />
        <Route path="/services/land-clearing" element={<LandClearing />} />
        <Route path="/services/landscaping" element={<Landscaping />} />
        <Route path="/services/emergency-services" element={<EmergencyServices />} />
        <Route path="/services/tree-health-eval" element={<TreeHealthEval />} />
      </Routes>
    </div>
  );
}

export default App;
