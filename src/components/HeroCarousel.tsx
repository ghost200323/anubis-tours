import React, { useState, useEffect } from "react";

const slides = [
  {
    type: "image",
    src: "public/images/Guests.jpeg",
    className: "slide-guests",
  },
  { type: "image", src: "public/images/camp.jpeg", className: "slide-camp" },
  { type: "image", src: "public/images/guest2.jpg", className: "slide-guest2" },
  { type: "image", src: "public/images/cru.jpeg", className: "slide-cru" },
  { type: "video", src: "public/images/desert.mp4", className: "slide-video" },
];

const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-carousel">
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === current ? "active" : ""}`}>
          {slide.type === "image" ? (
            <img
              src={slide.src}
              alt={`slide-${i}`}
              className={slide.className}
            />
          ) : (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              className={slide.className}
            />
          )}
        </div>
      ))}
      <button
        className="prev"
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
      >
        &#10094;
      </button>
      <button
        className="next"
        onClick={() => setCurrent((current + 1) % slides.length)}
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroCarousel;
