import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ addCertificate }) => {
  const [name, setName] = useState('');
  const [issuedBy, setIssuedBy] = useState('');
  const [dateIssued, setDateIssued] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && issuedBy && dateIssued) {
      try {
        const response = await axios.post('http://localhost:8080/certificate', {
          name,
          issuedBy,
          dateIssued,
        });
        addCertificate(response.data);
        setName('');
        setIssuedBy('');
        setDateIssued('');
      } catch (error) {
        console.error("There was an error creating the certificate!", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Certificate Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Issued By"
        value={issuedBy}
        onChange={(e) => setIssuedBy(e.target.value)}
        required
      />
      <input
        type="date"
        value={dateIssued}
        onChange={(e) => setDateIssued(e.target.value)}
        required
      />
      <button type="submit">Add Certificate</button>
    </form>
  );
};

export default Form;


