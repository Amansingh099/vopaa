import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import Remedial from './components/Remedial';

function App() {

  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Navbar />} /> 
          <Route path="/mainpage" element={<Mainpage/>}/>
          <Route path="/remedial" element={<Remedial />} /> 
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



