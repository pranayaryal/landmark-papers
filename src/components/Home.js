import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
          {/* <a href="#"><span className="tag is-black is-large">Neurology</span></a> */}
<section className="section">
          <NavLink to="/neurology" className="tag is-black is-large">Neurology</NavLink>
          <span className="tag is-primary is-large">Radiology</span>
          <NavLink to="/cardiology" className="tag is-link is-large">Cardiology</NavLink>
          <span className="tag is-warning is-large">Nephrology</span>
          <span className="tag is-info is-large">Emergency Medicine</span>
</section>
            
        </div>
    );
}

export default Home;
