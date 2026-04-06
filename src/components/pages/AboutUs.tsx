import React, { useState } from "react";

const AboutUs: React.FC = () => {
  const [review, setReview] = useState("");

  const handleSendReview = (contact: "kenan" | "mohmuad") => {
    const phone = contact === "kenan" ? "201003020628" : "201122599762";
    const message = `Client Review:\n\n${review}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero fade-slide-up">
        <h2>🌍 Welcome to Anubis Tours</h2>
        <p>
          Launched in 2020, Anubis Tours has redefined how travelers experience
          Egypt. Our mission is to blend ancient wonders with modern comfort —
          making every journey unforgettable.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="about-section fade-slide-up delay-1">
        <h3>✨ Why Choose Us?</h3>
        <ul className="benefits-list">
          <li>Transparent pricing & easy booking</li>
          <li>Expert guides with 6+ years of experience</li>
          <li>Immersive tours of pyramids, Nile cruises, and museums</li>
          <li>Personalized support and client care</li>
        </ul>
      </div>

      {/* Leadership Section */}
      <div className="about-section fade-slide-up delay-2">
        <h3>👥 Meet Our Leaders</h3>
        <div className="leaders-grid">
          <div className="leader-card">
            <h4>Mr. Kenan</h4>
            <p>
              CEO, Developer, and Manager. Oversees the website, operations, and
              brings deep knowledge of ancient Egyptian history.
            </p>
          </div>
          <div className="leader-card">
            <h4>Mr. Mohmuad</h4>
            <p>
              Manager & Tour Leader. Organizes operations, manages tour leaders,
              and ensures client feedback shapes our future.
            </p>
          </div>
        </div>
      </div>

      {/* Support & Review Section */}
      <div className="about-section fade-slide-up delay-3">
        <h3>💬 Support & Reviews</h3>
        <p>
          Have an issue or feedback? Share your thoughts below and send them
          directly to our managers via WhatsApp.
        </p>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
          placeholder="Type your review or issue here..."
        />
        <div className="review-buttons">
          <button onClick={() => handleSendReview("kenan")}>
            Send to Mr. Kenan
          </button>
          <button onClick={() => handleSendReview("mohmuad")}>
            Send to Mr. Mohmuad
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
