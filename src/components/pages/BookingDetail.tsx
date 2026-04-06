import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookingDetail: React.FC = () => {
  const location = useLocation();
  const tour = (location.state as any)?.tour;

  if (!tour) return <p>No booking details found.</p>;

  const [fullName, setFullName] = useState("");   // NEW field
  const [include, setInclude] = useState(tour.include || "");
  const [price, setPrice] = useState(tour.price || "");
  const [contact, setContact] = useState("kenan"); // default contact

  const handleConfirm = () => {
    // Build message with booking info
    const message = `Hello, I would like to confirm my booking:\n\n` +
      `Full Name: ${fullName}\n` +
      `Tour: ${tour.title}\n` +
      `Included Services: ${include}\n` +
      `Chosen Price Option: ${price}\n`;

    // Choose number based on contact
    const phone =
      contact === "kenan" ? "201003020628" : "201122599762";

    // WhatsApp link
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(url, "_blank");
  };

  return (
    <section className="booking-details">
      <h2>Booking Details for {tour.title}</h2>
      <img src={tour.image} alt={tour.title} className="booking-img" />

      {/* Full Name Field */}
      <div className="booking-section">
        <h3>Your Full Name</h3>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          style={{ width: "100%", padding: "0.8em", borderRadius: "6px" }}
        />
      </div>

      <div className="booking-section">
        <h3>Included Services</h3>
        <textarea
          value={include}
          onChange={(e) => setInclude(e.target.value)}
          rows={4}
          style={{ width: "100%" }}
        />
      </div>

      <div className="booking-section">
        <h3>Choose Price Option</h3>
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          {tour.price.split(",").map((option: string, idx: number) => (
            <option key={idx} value={option.trim()}>
              {option.trim()}
            </option>
          ))}
        </select>
      </div>

      <div className="booking-section">
        <h3>Choose Contact</h3>
        <label>
          <input
            type="radio"
            value="kenan"
            checked={contact === "kenan"}
            onChange={() => setContact("kenan")}
          />
          Mr. Kenan (+201003020628)
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="mohmuad"
            checked={contact === "mohmuad"}
            onChange={() => setContact("mohmuad")}
          />
          Mr. Mohmuad (+201122599762)
        </label>
      </div>

      <button className="confirm-btn" onClick={handleConfirm}>
        Confirm Booking
      </button>
    </section>
  );
};

export default BookingDetail;
