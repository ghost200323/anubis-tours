import React from "react";
import TourCard from "../TourCard";
import { Link } from "react-router-dom";
import anubisLogo from "../../assets/images/granfpyrmidslast.png";
import fastVid from "../../assets/images/fast.mp4";
import gizaImg from "../../assets/images/giza-pyramid.jpg";
import safariImg from "../../assets/images/safari.jpg";
import meusemImg from "../../assets/images/meusem.jpg";
import falucaaImg from "../../assets/images/falucaa.jpg";
import transferImg from "../../assets/images/am2.jpeg";
import am8 from "../../assets/images/am8.jpeg";
import am9 from "../../assets/images/am9.jpeg";
const Tours: React.FC = () => (
  <div className="tour-page">
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
      <source src={fastVid} type="video/mp4" />
    </video>

    <section className="tours">
      <h2 className="section-title">Our Tours</h2>
      <div className="tour-grid">
        <TourCard
          image={gizaImg}
          title="Pyramids of Giza"
          description="Explore the ancient wonders of the world."
          include="include: car + guide + lunch + entry tickets + water"
          price="60$"
          link="/tour-detail/1"
        />
          <TourCard
          image={am8}
          title="1‑Night / 2‑Day The Desert, The White And Black Oases"
          description="Escape Cairo for an unforgettable desert adventure through Egypt’s breathtaking landscapes. This 1‑night, 2‑day safari takes you deep into the Black and White Deserts."
          include="include: Car + Guide + Entry Fees + Full Meals"
          price="300$"
          link="/tour-detail/2"
        />

        <TourCard
          image={safariImg}
          title="1 Hour Quad Bike"
          description="Enjoy with safari Around Desert."
          include="include: car + rep + entry tickets + water"
          price="50$"
          link="/tour-detail/3"
        />
        <TourCard
          image={meusemImg}
          title="Cairo Museum"
          description="Discover ancient artifacts and history."
          include="include: car + guide + entry tickets + water"
          price="75$"
          link="/tour-detail/4"
        />
        <TourCard
          image={falucaaImg}
          title="1 Hour Falucaa"
          description="Sail with beautiful small Falucaa around the Nile River."
          include="include: car + rep + lunch + entry tickets + water"
          price="40$"
          link="/tour-detail/5"
        />
        <TourCard
          image={transferImg}
          title="Transfer From Hotel to Airport or Around City"
          description="Transfer with modern cars and choose the features."
          include="include: car + Rep + water"
          price="35$-50$"
          link="/tour-detail/6"
        />

        <TourCard
          image={am9}
          title="Saqqara Memphis and Dahshur Pyramids Day Tour"
          description="Step beyond the famous Giza Plateau and uncover Egypt’s Old Kingdom legacy."
          include="include: Car + Guide + Entry Fees + Trandational Egyptian Lunch + Water"
          price="135$"
          link="/tour-detail/11"
        />
      </div>
    </section>
  </div>
);

export default Tours;