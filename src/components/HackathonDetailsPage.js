import React from 'react';
import { useParams, Link } from 'react-router-dom';

const HackathonDetailsPage = ({ hackathons }) => {
  const { id } = useParams();
  const hackathon = hackathons.find(h => h.id === id);

  if (!hackathon) {
    return <div>Hackathon not found</div>;
  }

  const shareUrl = `${window.location.origin}/hackathon/${id}`;

  return (
    <div className="hackathon-details">
      <h1>{hackathon.name}</h1>
      <img src={hackathon.bannerImage} alt={hackathon.name} />
      <p>{hackathon.description}</p>
      <p><strong>Start Date:</strong> {new Date(hackathon.startDate.seconds * 1000).toLocaleDateString()}</p>
      <p><strong>End Date:</strong> {new Date(hackathon.endDate.seconds * 1000).toLocaleDateString()}</p>
      <p><strong>Registration Deadline:</strong> {new Date(hackathon.registrationDeadline.seconds * 1000).toLocaleDateString()}</p>
      <p><strong>Website:</strong> <a href={hackathon.website} target="_blank" rel="noopener noreferrer">{hackathon.website}</a></p>
      <p><strong>Organizer:</strong> {hackathon.organizer}</p>
      <p><strong>Location:</strong> {hackathon.location}</p>
      <p><strong>Prize Details:</strong> {hackathon.prizeDetails}</p>
      <p><strong>Tags:</strong> {hackathon.tags.join(', ')}</p>
      <Link to="/" className="btn">Back to Home</Link>
      <button onClick={() => navigator.clipboard.writeText(shareUrl)}>Share to your friend</button>
    </div>
  );
};

export default HackathonDetailsPage;
