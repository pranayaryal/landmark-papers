import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = props => {
  return (
    <div className="lg:text-lg lg:flex lg:flex-col lg:items-start text-gray-800 text-center xl:text-xl hidden">
      <div className="mt-4">Neurology</div>
      <NavLink to="/movement" className="mt-4 ml-4 no-underline text-gray-800">Movement Disorders</NavLink>
      <NavLink to="/neuromuscular" className="mt-4 ml-4 no-underline text-gray-800">Neuromuscular Disorders</NavLink>
    </div>

  );
}

export default Menu;