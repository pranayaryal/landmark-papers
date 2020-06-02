
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item is-uppercase" href="/">
                        Landmark papers
                    </a>
                    <span role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
