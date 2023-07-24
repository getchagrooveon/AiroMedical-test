import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ info }) => {
  return <NavLink to={`${info.id}`}>More info</NavLink>;
};

export default Button;
