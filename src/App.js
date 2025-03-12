import React, { useState } from 'react';
import Form from './Form';
import List from './List';

const App = () => {
  const [certificates, setCertificates] = useState([]);

  const addCertificate = (certificate) => {
    setCertificates([...certificates, certificate]);
  };

  return (
    <div className="App">
      <h1>Certificate Module</h1>
      <Form addCertificate={addCertificate} />
      <List certificates={certificates} />
      
    </div>
  );
};

export default App;



