import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/invoice.css';

const Button = ({ to, label }) => (
  <Link to={to} className="buttonCustom">
    {label}
  </Link>
);

export default Button;
