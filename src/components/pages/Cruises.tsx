import React from "react";
import TourCard from "../TourCard";
import { Link } from "react-router-dom";
import anubisLogo from "../../assets/images/granfpyrmidslast.png";
import sailVid from "../../assets/images/sail.mp4";
import andreaImg from "../../assets/images/andrea.jpg";
import nilephornImg from "../../assets/images/nilephorn.jpeg";
import nilemaxImg from "../../assets/images/nilemaxim.jpg";
const Cruises: React.FC = () => (
  <div className="cruise-page">
    <header>
      <div className="header-container">
        <div className="logo-area">
          <img src={anubisLogo} alt="Grand Pyramids Logo" className="logo-img" />
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
    </header>

    <video autoPlay muted loop>
      <source src={sailVid} type="video/mp4" />
    </video>

    <section className="tours">
      <h2 className="section-title">Our Cruises</h2>
      <div className="tour-grid">
        <TourCard
          image={andreaImg}
          title="Short Dinner In Andrea Cruise 4 Stars"
          description="Explore the Nile with a short dinner cruise."
          link="/tour-detail/6"
          include="car + rep + Dinner + entry fees + water"
          price="40$"
        />
        <TourCard
          image={nilephornImg}
          title="Chill Short Dinner In Nile Pharons 5 Stars"
          description="Enjoy a relaxing evening on the Nile Pharons."
          link="/tour-detail/7"
          include="car + rep + Dinner + entry fees + water"
          price="60$"
        />
        <TourCard
          image={nilemaxImg}
          title="Luxury Dinner in Maxim Cruise 5 Stars"
          description="Experience luxury dining aboard the Maxim cruise."
          link="/tour-detail/8"
          include="car + rep + Dinner + entry fees + water"
          price="100$"
        />
      </div>
    </section>
  </div>
);

export default Cruises;