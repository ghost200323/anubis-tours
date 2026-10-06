import React, { useState, useEffect } from "react";
import guestsImg from "../assets/images/am1.jpeg";
import campImg from "../assets/images/am6.jpeg";
import guest2Img from "../assets/images/am3.jpeg";
import cruImg from "../assets/images/am4.jpeg";

import amd5 from "../assets/images/am5.jpeg";
import amd6 from "../assets/images/am7.jpeg";
import desertVid from "../assets/images/desert.mp4";

const slides = [
  { type: "image", src: guestsImg, className: "slide-guests" },
  { type: "image", src: campImg, className: "slide-camp" },
  { type: "image", src: guest2Img, className: "slide-guest2" },
  { type: "image", src: cruImg, className: "slide-cru" },
  { type: "image", src: amd5, className: "slide-amd5" },
  { type: "image", src: amd6, className: "slide-amd6" },
  { type: "video", src: desertVid, className: "slide-video" },
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