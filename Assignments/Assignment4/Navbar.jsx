import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">KOLLYWOOD DB</Link>
      
      <input 
        type="text" 
        placeholder="Search Actor..." 
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;