import React from 'react';
import "./Navbar.css";

export const Navbar = ({ isScrolling }) => {
     const toTheTop = () => {
        window.scrollTo({ Top: 0, left: 0, behavior: "smooth"});
     }

  return (
    <nav className={ `navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo" onClick={toTheTop}>
            Home</div>
    </nav>
  );
};
