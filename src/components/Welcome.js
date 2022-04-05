import React from 'react';
import wizlogo from '../images/wizlogo.png';

const Welcome = () => {
  return (
    <div className="welcome">
      <img className="wiz slide-in-top" src={wizlogo} />
    </div>
  );
};

export default Welcome;
