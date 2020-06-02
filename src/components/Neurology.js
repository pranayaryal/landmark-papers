import React from 'react';

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
                <p>You are in neurology</p>
            </div>
        </div>
      </div>
    );
}

export default Neurology;
