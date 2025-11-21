import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BasicInfoForm = ({ setFormData }) => {
  const navigate = useNavigate();
  const [localData, setLocalData] = useState({
    name: '',
    email: '',
    idNumber: '',
    gender: 'Male',
    image: null
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imgUrl = URL.createObjectURL(e.target.files[0]);
      setLocalData({ ...localData, image: imgUrl });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!localData.name || !localData.idNumber) {
      alert("Please enter Name and ID Number");
      return;
    }
    setFormData(localData);
    navigate('/address');
  };

  return (
    <div className="container">
      <h2>Step 1: Personal Details</h2>
      <form onSubmit={handleNext} className="form-container">
        
        <label>Upload Photo:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className="input-field" />
        
        {localData.image && <img src={localData.image} alt="Preview" className="img-preview" />}
        
        <input 
          type="text" placeholder="Full Name" className="input-field"
          value={localData.name} onChange={(e) => setLocalData({...localData, name: e.target.value})} 
        />
        <input 
          type="email" placeholder="Email" className="input-field"
          value={localData.email} onChange={(e) => setLocalData({...localData, email: e.target.value})} 
        />
        <input 
          type="text" placeholder="ID Number" className="input-field"
          value={localData.idNumber} onChange={(e) => setLocalData({...localData, idNumber: e.target.value})} 
        />
        <select 
          className="input-field"
          value={localData.gender} onChange={(e) => setLocalData({...localData, gender: e.target.value})}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit" className="btn btn-primary">Next Page &rarr;</button>
      </form>
    </div>
  );
};

export default BasicInfoForm;