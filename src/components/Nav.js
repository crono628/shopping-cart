import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to={'/showroom'}>
        <div>Store</div>
      </Link>
      <div className="cart">Cart</div>
    </nav>
  );
};

export default Nav;
