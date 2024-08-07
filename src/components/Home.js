// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { fetchAllHackathons, addSubscription } from '../firebase/firebaseUtils';
import HackathonCard from './HackathonCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const [hackathons, setHackathons] = useState([]);
  const [category, setCategory] = useState('hackathon');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllHackathons(category);
      setHackathons(data.slice(0, 10));
    };

    fetchData();
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscribe = async () => {
    if (validateEmail(email)) {
      await addSubscription(email);
      setMessage('Subscribed successfully!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <div className="home">
      <header>
        <h1>Hackathon Portal</h1>
      </header>
      <div className="categories">
        <button onClick={() => handleCategoryChange('hackathon')}>Hackathons</button>
        <button onClick={() => handleCategoryChange('workshop')}>Workshops</button>
        <button onClick={() => handleCategoryChange('event')}>Events</button>
      </div>
      <div className="hackathon-list">
        {hackathons.map(hackathon => (
          <HackathonCard key={hackathon.id} hackathon={hackathon} />
        ))}
      </div>
      <div className="view-all">
        <Link to={`/all-${category}s`}>View All {category.charAt(0).toUpperCase() + category.slice(1)}s</Link>
      </div>
      <div className="subscribe">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe to this newsletter</button>
        {message && <p>{message}</p>}
      </div>
      <footer>
        <p>&copy; 2024 Hackathon Portal</p>
      </footer>
    </div>
  );
};

export default Home;
