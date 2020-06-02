import React from 'react';

const Home = () => {
    return (
        <div className="container">
          {/* <a href="#"><span className="tag is-black is-large">Neurology</span></a> */}
<section className="section">
          <a href="/neurology" className="tag is-black is-large">Neurology</a>
          <span className="tag is-primary is-large">Radiology</span>
          <a href="/cardiology" className="tag is-link is-large">Cardiology</a>
          <span className="tag is-warning is-large">Nephrology</span>
          <span className="tag is-info is-large">Emergency Medicine</span>
</section>
            
        </div>
    );
}

export default Home;
