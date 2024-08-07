// src/components/HackathonDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const HackathonDetailsPage = () => {
  const { id } = useParams();
  const [hackathon, setHackathon] = useState(null);

  useEffect(() => {
    const fetchHackathon = async () => {
      const docRef = doc(db, 'hackathons', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setHackathon({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    fetchHackathon();
  }, [id]);

  if (!hackathon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hackathon-details">
      <h1>{hackathon.name}</h1>
      <p>{hackathon.description}</p>
      <p><strong>Start Date:</strong> {hackathon.startDate}</p>
      <p><strong>End Date:</strong> {hackathon.endDate}</p>
      <p><strong>Registration Deadline:</strong> {hackathon.registrationDeadline}</p>
      <p><strong>Website:</strong> <a href={hackathon.website} target="_blank" rel="noopener noreferrer">{hackathon.website}</a></p>
      <p><strong>Organizer:</strong> {hackathon.organizer}</p>
      <p><strong>Location:</strong> {hackathon.location}</p>
      <p><strong>Prize Details:</strong> {hackathon.prizeDetails}</p>
      <p><strong>Tags:</strong> {hackathon.tags.join(', ')}</p>
      <p><strong>Category:</strong> {hackathon.category}</p>
      <img src={hackathon.bannerImage} alt={hackathon.name} />
      <button onClick={() => navigator.clipboard.writeText(window.location.href)}>Share to your friend</button>
    </div>
  );
};

export default HackathonDetailsPage;
