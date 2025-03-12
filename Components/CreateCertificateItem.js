import React, { useState } from 'react';
import axios from 'axios';

const CreateCertificateItem = () => {
  const [name, setName] = useState('');
  const [issuedBy, setIssuedBy] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/certificates', { name, issuedBy, date });
      window.location.href = '/'; // Redirect to list page after creation
    } catch (error) {
      console.error('Error creating certificate:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Certificate</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Issued By:</label>
        <input
          type="text"
          value={issuedBy}
          onChange={(e) => setIssuedBy(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateCertificateItem;
