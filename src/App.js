import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Terms from "./component/Terms";
import Support from "./component/Support";
import "./App.css";
import logo from './component/icon/logo.png';

const App = () => {
  return (
    <>
    <img src={logo} alt="logo" id="logo" width={'260px'} />
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
};

export default App;
