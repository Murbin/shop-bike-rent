import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, label }) => (
  <Link
    to={to}
    style={{
      textAlign: 'center',
      background: 'white',
      width: 100,
      padding: 7,
      marginRight: 26,
      textDecoration: 'none',
      color: 'black',
      fontWeight: 'bold',
      borderRadius: 20
    }}
  >
    {label}
  </Link>
);

export default Button;
