import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ActorDetails = ({ actors }) => {
  const { id } = useParams();
  // Find the actor using the ID from the URL
  const actor = actors.find(a => a.id === parseInt(id));

  if (!actor) return <div className="container"><h2 style={{color:'white'}}>Actor not found</h2></div>;

  return (
    <div className="container">
      <div className="detail-container">
        <img src={actor.image} alt={actor.name} className="detail-img" />
        
        <div className="detail-text">
          <h1>{actor.name}</h1>
          <span className="role-badge">{actor.role}</span>
          
          <p style={{fontSize: '1.1rem'}}><strong>Rating:</strong> ⭐ {actor.rating}/5.0</p>
          <p style={{fontSize: '1.1rem'}}><strong>Hits:</strong> {actor.hits}</p>
          
          <p style={{lineHeight: '1.8', fontSize: '1.1rem', color: '#ddd', marginTop: '20px'}}>
            {actor.description}
          </p>
          
          <Link to="/" className="back-btn">Back to Gallery</Link>
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;