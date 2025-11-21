import React from 'react';
import { Link } from 'react-router-dom';

const CharacterGallery = ({ users }) => {
  return (
    <div className="container">
      <h1>Character Directory</h1>
      <Link to="/create" className="btn btn-add">+ Add New Character</Link>
      
      <div className="grid">
        {users.length === 0 && <p>No characters found.</p>}
        
        {users.map((user, index) => (
          <div key={index} className="card">
            {/* Click Image to go to details */}
            <Link to={`/details/${user.idNumber}`}>
              <img 
                src={user.image || 'https://via.placeholder.com/150'} 
                alt={user.name} 
                className="card-img" 
              />
            </Link>
            <h3>{user.name}</h3>
            <p>ID: {user.idNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGallery;