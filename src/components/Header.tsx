import React from "react";
import { Link } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";
import anubisLogo from "../assets/images/granfpyrmidslast.png";

const Header: React.FC = () => {
  return (
    <header className="top-header">
      <div className="header-container">
        <div className="logo-area">
          <img
            src={anubisLogo}
            alt="Grand Pyramids logo featuring an Egyptian deity icon with the company name Grand Pyramids"
            className="logo-img"
          />
          <h1 className="logo-text">
            Grand <span>Pyramids</span>
          </h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tours">Tours</Link></li>
            <li><Link to="/cruises">Cruises</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
      </div>

      <HeroCarousel />

      <div className="hero-text">
        <h2>Discover Egypt with Grand Pyramids</h2>
        <p>Experience the Nile, the pyramids, and the wonders of Egypt with our expert guides.</p>
      </div>
    </header>
  );
};

export default Header;