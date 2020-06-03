import React from 'react';
import {Chatting} from '../img/chatting using apps.svg'

import MenuNeuro from './MenuNeuro';
import Home from './Home';

const Neurology = () => {
    return (
       <div className="container">
       <Home />
        <div className="columns">
            <div className="column is-one-third">
                <MenuNeuro />
            </div>
            <div className="column is-two-thirds">
                <p>Neuro guys have no job</p>
                <img src={require('../img/chatting using apps.svg')} alt='chatting'/>
            </div>
        </div>
      </div>
    );
}

export default Neurology;
