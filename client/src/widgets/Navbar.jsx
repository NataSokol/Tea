import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/teas'>Teas</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
