import React from 'react';

import MenuCardio from './MenuCardio';
import Home from './Home';

const Cardiology = () => {
    return (
        <div className="container">
            <Home />
            <MenuCardio />
            <p>You are in cardiology</p>
        </div>
    );
}

export default Cardiology;
