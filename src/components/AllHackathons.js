import React, { useEffect, useState } from 'react';
import { fetchAllHackathons } from '../firebase/firebaseUtils';
import HackathonCard from './HackathonCard';

const AllHackathons = ({ category }) => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllHackathons(category);
      setHackathons(data);
    };

    fetchData();
  }, [category]);

  return (
    <div className="all-hackathons">
      <header>
        <h1>All {category.charAt(0).toUpperCase() + category.slice(1)}s</h1>
      </header>
      <div className="hackathon-list">
        {hackathons.map(hackathon => (
          <HackathonCard key={hackathon.id} hackathon={hackathon} />
        ))}
      </div>
    </div>
  );
};

export default AllHackathons;
