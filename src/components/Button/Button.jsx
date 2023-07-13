import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ info }) => {
  const handleClick = () => {
    console.log(info.id);
  };

  return (
    <NavLink to={`/${info.id}`} onClick={handleClick}>
      More info
    </NavLink>
  );
};

export default Button;
