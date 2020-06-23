import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="text-md md:w-auto md:mt-4 md:text-lg lg:text-lg xl:text-xl"><span className="text-blue-800">Welcome</span>, you will find the landmark papers here</div>
      <img className="w-56 h-56 ml-4 md:w-auto md:h-64 lg:mt-10 lg:w-9/12 lg:h-9/12 xl:w-3/4 xl:h-full" src={require('../img/suburbs.svg')} alt="suburbs"/>
    </div>
  );
}

export default Home;
