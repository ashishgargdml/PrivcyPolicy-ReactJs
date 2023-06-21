import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './component/Privacy-Policy';
import Terms from './component/Terms';
import Support from './component/Support';

const App = () => {
  return (
    <>
    <div>
      <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
      <li><Link to='/terms'>Terms</Link></li>
      <li><Link to='/support'>Support</Link></li>
    </div>
    <Routes>
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/support' element={<Support />} />
      </Routes>
    </>
  )
}

export default App