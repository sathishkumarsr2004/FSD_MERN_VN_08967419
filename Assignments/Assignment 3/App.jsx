import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Importing External CSS

// Importing Components
import CharacterGallery from './Components/CharacterGallery';
import CharacterDetails from './Components/CharacterDetails';
import BasicInfoForm from './Components/BasicInfoForm';
import AddressForm from './Components/AddressForm';

function App() {
  const [users, setUsers] = useState([]);
  const [tempData, setTempData] = useState({});

  const saveCharacter = (newCharacter) => {
    setUsers([...users, newCharacter]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterGallery users={users} />} />
        <Route path="/create" element={<BasicInfoForm setFormData={setTempData} />} />
        <Route path="/address" element={<AddressForm formData={tempData} saveCharacter={saveCharacter} />} />
        <Route path="/details/:id" element={<CharacterDetails users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;