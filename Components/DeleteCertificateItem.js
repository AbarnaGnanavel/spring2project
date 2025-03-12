import React from 'react';
import axios from 'axios';

const DeleteCertificateItem = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(/api/certificates/$,{id});
      onDelete(id); // Call parent function to update list
    } catch (error) {
      console.error('Error deleting certificate:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteCertificateItem;