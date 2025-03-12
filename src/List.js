import React from 'react';

const List = ({ certificates }) => {
  return (
    <div>
      <h2>Certificate List</h2>
      <ul>
        {certificates.map((cert, index) => (
          <li key={index}>
            {cert.name} - {cert.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
