import React from 'react';

import Home from './Home';

const Movement = () => {
  return (
    <div className="flex flex-col">
      <img className="w-auto" src={require('../img/chatting using apps.svg')} alt='chatting' />
      <div className="text-xl text-gray-900 mt-2">You are in Movement Disorders</div>
    </div>
  );
}

export default Movement;
