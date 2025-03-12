import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateCertificateItem = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [issuedBy, setIssuedBy] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetchCertificateItem();
  }, []);

  const fetchCertificateItem = async () => {
    try {
      const response = await axios.get(/api/certificates/$,{id});
      const { name, issuedBy, date } = response.data;
      setName(name);
      setIssuedBy(issuedBy);
      setDate(date);
    } catch (error) {
      console.error('Error fetching certificate:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(/api/certificates/$,{id}, { name, issuedBy, date });
      window.location.href = '/'; // Redirect to list page after update
    } catch (error) {
      console.error('Error updating certificate:', error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update Certificate</h2>
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
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateCertificateItem;