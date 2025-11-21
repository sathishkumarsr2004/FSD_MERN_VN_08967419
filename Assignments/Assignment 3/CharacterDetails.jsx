import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const CharacterDetails = ({ users }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const user = users.find(u => u.idNumber === id);

  if (!user) return <div className="container"><h2>User not found</h2></div>;

  return (
    <div className="container">
      <h2>Character Profile</h2>
      <div className="detail-card">
        <img 
          src={user.image || 'https://via.placeholder.com/150'} 
          alt={user.name} 
          className="detail-img" 
        />
        <div className="detail-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>ID:</strong> {user.idNumber}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>
      </div>
      
      {/* EDIT BUTTON */}
      <Link to={`/edit/${user.idNumber}`} className="btn btn-warning">
        Edit Profile
      </Link>

      <button onClick={() => navigate('/')} className="btn btn-secondary">
        Back to Gallery
      </button>
    </div>
  );
};

export default CharacterDetails;