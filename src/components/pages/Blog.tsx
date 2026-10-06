import React from "react";

const Blog: React.FC = () => {
  return (
    <section className="blog-page">
      <h2>Follow Us</h2>
      <p>
        Instagram:{" "}
        <a
          href="https://www.instagram.com/3mad_ezzat5?stkn=aXpxbGN3ZjJ0aDkz"
          target="_blank"
          rel="noopener noreferrer"
        >
          @grandpyramids
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
        onClick={() => window.open("https://wa.me/201149245818", "_blank")}
      >
        Mr. Emad (+201149245818)
      </button>
    </section>
  );
};

export default Blog;
