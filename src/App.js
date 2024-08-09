import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AllHackathons from './components/AllHackathons';
import HackathonDetailsPage from './components/HackathonDetailsPage';
import { fetchAllHackathons } from './firebase/firebaseUtils';
import Header from './components/Header';
import  Footer  from './components/Footer';

function App() {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllHackathons('hackathon');
      setHackathons(data);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/all-hackathons" element={<AllHackathons category="hackathon" />} />
          <Route path="/all-workshops" element={<AllHackathons category="workshop" />} />
          <Route path="/all-events" element={<AllHackathons category="event" />} />
          <Route path="/hackathon/:id" element={<HackathonDetailsPage hackathons={hackathons} />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
