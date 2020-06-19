import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <img className="w-56 h-56 lg:w-9/12 lg:h-9/12" src={require('../img/suburbs.svg')} alt="suburbs"/>
      <div className="text-lg lg:ml-64 lg:mt-10">Welcome, you will find the landmark papers here</div>
    </div>
  );
}

export default Home;
