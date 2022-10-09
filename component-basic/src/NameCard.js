import React from 'react';

const NameCard = ({ myName, myAge }) => {
  return (
    <>
      <p> Name: {myName}</p>
      <p> Age: {myAge}</p>
    </>
  );
};

export default NameCard;
