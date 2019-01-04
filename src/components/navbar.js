import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar has-background-light">
			<div 
        className="container is-centered columns"
        style={{ margin: `auto` }}
      >
        <div className="column">
          <button className="button">
            <Link to="/jar-candles/">Jar Candles</Link>
          </button>
        </div>
        <div className="column">
          <button className="button">
            <Link to="/tea-lights/">Tea Lights</Link>
          </button>
        </div>
        <div className="column">
          <button className="button">
            <Link to="/scented-candles/">Scented Candles</Link>
          </button>
        </div>
        <div className="column">
          <button className="button">
            <Link to="/votive-candles/">Votive Candles</Link>
          </button>
        </div>
			</div>
		</nav>
	</div>
);

export default Navbar;
