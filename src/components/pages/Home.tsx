import React from "react";
import Header from "../Header";

import TourCard from "../TourCard";

const Home: React.FC = () => (
  <>
    <Header />

    {/* Intro section */}
    <section className="intro">
      <h2>Our Featured Tours</h2>
      <p>
        From Nile cruises to desert adventures, we bring Egypt’s history to
        life.
      </p>
    </section>
    <div className="tour-grid">
      <TourCard
        image="/images/giza-pyramid.jpg"
        title="Pyramids of Giza"
        description="Explore the ancient wonders of the world."
        include="include: car + guide + lunch + entry tickets + water

"
        price="60$"
        link="/tour-detail/1"
      />
      <TourCard
        image="/images/safari.jpg"
        title="1 Hour Quad Bike"
        description="Enjoy with safari Around Desert."
        include="include: car + rep + entry tickets + water"
        price="50$"
        link="/tour-detail/2"
      />
      <TourCard
        image="/images/andrea.jpg"
        title="Short Dinner In Andrea Cruise 4 Stars"
        description="Explore the Nile with a short dinner cruise."
        include="include: car + rep + lunch + entry tickets + water"
        price="40$"
        link="/tour-detail/6"
      />
      <TourCard
        image="/images/Egypt-Airport-Transfers.jpg"
        title="Transfer From Hotel to Airport or Around City"
        description="Transfer with modern cars and choose the features."
        include="include: car + guide + water"
        price="35$-50$"
        link="/tour-detail/5"
      />
    </div>

    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; 2026 Anubis Tours. All rights reserved.</p>
      </div>
    </footer>
  </>
);

export default Home;
