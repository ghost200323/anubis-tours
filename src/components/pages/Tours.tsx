import React from "react";
import TourCard from "../TourCard";
import { Link } from "react-router-dom";

const Tours: React.FC = () => (
  <div className="tour-page">
    <header>
      <div className="header-container">
        <div className="logo-area">
          <img
            src="/images/anubis.png"
            alt="Anubis Logo"
            className="logo-img"
          />
          <h1 className="logo-text">
            Anubis <span>Tours</span>
          </h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tours">Tours</Link>
            </li>
            <li>
              <Link to="/cruises">Cruises</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <video autoPlay muted loop>
      <source src="/images/fast.mp4" type="video/mp4" />
    </video>
    <section className="tours">
      <h2 className="section-title">Our Tours</h2>
      <div className="tour-grid">
        <TourCard
          image="/images/giza-pyramid.jpg"
          title="Pyramids of Giza"
          description="Explore the ancient wonders of the world."
          include="include: car+guide + lunch + entry tickets + water "
          price="60$"
          link="/tour-detail/1"
        />
        <TourCard
          image="/images/safari.jpg"
          title="1 Hour Quad Bike"
          description="Enjoy with safari Around Desert."
          include="include: car+rep + entry tickets + water "
          price="50$"
          link="/tour-detail/2"
        />
        <TourCard
          image="/images/meusem.jpg"
          title="Cairo Museum"
          description="Discover ancient artifacts and history."
          include="include: car+guide + entry tickets + water "
          price="75$"
          link="/tour-detail/3"
        />
        <TourCard
          image="/images/falucaa.jpg"
          title="1 Hour Falucaa"
          description="Sail with beautiful small Falucaa around the Nile River."
          include="include: car+ rep + lunch + entry tickets + water "
          price="40$"
          link="/tour-detail/4"
        />
        <TourCard
          image="/images/Egypt-Airport-Transfers.jpg"
          title="Transfer From Hotel to Airport or Around City"
          description="Transfer with modern cars and choose the features."
          include="include: car+guide + water "
          price="35$-50$"
          link="/tour-detail/5"
        />
      </div>
    </section>
  </div>
);

export default Tours;
