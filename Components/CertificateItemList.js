import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CertificateItemList = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this with your actual API URL
    axios.get('http://localhost:8080/api/certificates')
      .then(response => {
        setCertificates(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching certificates:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading certificates...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Certificate List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Issued By</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((cert, index) => (
            <tr key={index}>
              <td>{cert.name}</td>
              <td>{cert.issuedBy}</td>
              <td>{cert.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertificateItemList;
