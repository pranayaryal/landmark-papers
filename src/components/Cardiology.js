import React from 'react';

import MenuCardio from './MenuCardio';
import Home from './Home';

const Cardiology = () => {
    return (
        <div className="container">
            <Home />
            <div className="columns">
            <div className="column is-one-third">
                <MenuCardio />
            </div>
            <div className="column is-one-third">
            <p>You are in cardiology</p>
            <img src={require('../img/working in a laboratory.svg')} alt="lab" />
            </div>
            </div>
        </div>
    );
}

export default Cardiology;
