import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ actors, searchTerm }) => {
  // Filter logic inside the component
  const filteredActors = actors.filter(actor => 
    actor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title-animate">Tamil Superstars</h1>
      
      <div className="grid">
        {filteredActors.map((actor) => (
          <Link to={`/actor/${actor.id}`} key={actor.id} style={{textDecoration: 'none'}}>
            <div className="card">
              <div className="img-wrapper">
                <img src={actor.image} alt={actor.name} className="card-img" />
              </div>
              <div className="card-info">
                <h3>{actor.name}</h3>
                <p>{actor.role}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredActors.length === 0 && (
        <h2 style={{color: '#666'}}>No actors found.</h2>
      )}
    </div>
  );
};

export default Home;