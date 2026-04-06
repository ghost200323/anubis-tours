import React from "react";

const Blog: React.FC = () => {
  return (
    <section className="blog-page">
      <h2>Follow Us</h2>
      <p>
        Instagram:{" "}
        <a
          href="https://www.instagram.com/anubislegnacytours/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @anubislegnacytours
        </a>
      </p>

      <h3>Contact Us on WhatsApp</h3>
      <button
        className="whatsapp-btn"
        onClick={() => window.open("https://wa.me/201003020628", "_blank")}
      >
        Mr. Kenan (+201003020628)
      </button>
      <button
        className="whatsapp-btn"
        onClick={() => window.open("https://wa.me/201122599762", "_blank")}
      >
        Mr. Mohmuad (+201122599762)
      </button>
    </section>
  );
};

export default Blog;
