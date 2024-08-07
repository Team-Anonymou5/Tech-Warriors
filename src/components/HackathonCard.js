// src/components/HackathonCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const HackathonCard = ({ hackathon }) => {
  return (
    <div className="hackathon-card">
      <img src={hackathon.bannerImage} alt={hackathon.name} />
      <h3>{hackathon.name}</h3>
      <p>{hackathon.prizeDetails}</p>
      <Link to={`/hackathon/${hackathon.id}`}>View Details</Link>
    </div>
  );
};

export default HackathonCard;
