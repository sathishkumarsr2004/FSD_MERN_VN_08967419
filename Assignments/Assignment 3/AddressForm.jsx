import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddressForm = ({ formData, saveCharacter, updateCharacter }) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Check if editing
  const [address, setAddress] = useState('');

  // Pre-fill address if it exists in formData (passed from Step 1)
  useEffect(() => {
    if (formData.address) {
      setAddress(formData.address);
    }
  }, [formData]);

  const handleSave = (e) => {
    e.preventDefault();
    const fullCharacter = { ...formData, address };
    
    if (id) {
      // Update existing character
      updateCharacter(fullCharacter);
    } else {
      // Create new character
      saveCharacter(fullCharacter);
    }
    
    navigate(`/details/${fullCharacter.idNumber}`);
  };

  return (
    <div className="container">
      <h2>{id ? 'Edit Address' : `Step 2: Address for ${formData.name}`}</h2>
      <form onSubmit={handleSave} className="form-container">
        <label>Address:</label>
        <textarea 
          placeholder="Enter full address..." 
          className="input-field"
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
        />
        <button type="submit" className="btn btn-success">
          {id ? 'Update Character' : 'Save Character'}
        </button>
      </form>
    </div>
  );
};

export default AddressForm;