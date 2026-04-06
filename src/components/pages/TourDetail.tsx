import React from "react";
import { useParams, useNavigate } from "react-router-dom";  // import useNavigate

const tours = [
  {
    id: "1",
    image: "/images/giza-pyramid.jpg",
    title: "Pyramids of Giza",
    description:
      "Discover the timeless majesty of the Pyramids of Giza, one of the Seven Wonders of the Ancient World. Our tour is designed to make your visit effortless and unforgettable just relax and enjoy while we take care of everything.",
    include: "include:  car + guide + lunch + entry tickets + water ",
    price:
      "1 person 60$, 2 person 75$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "2",
    image: "/images/safari.jpg",
    title: "1 Hour Quad Bike",
    description:
      "Feel the thrill of the desert with the Pyramids of Giza as your backdrop. Our quad-bike tour is the perfect mix of excitement and history, giving you a safe, well-organized ride across the sands with no hassle.",
    include: "include: car + rep + entry tickets + water ",
    price:
      "1 person 50$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "3",
    image: "/images/meusem.jpg",
    title: "Cairo Museum",
    description:
      "Step into the legendary Egyptian Museum in Tahrir Square, home to the world’s greatest collection of ancient treasures. From golden artifacts of Tutankhamun to timeless statues and mummies, this tour brings history vividly to life.",
    include: "include: car + guide +  entry tickets + water ",
    price:
      "1 person 75$, 2 person 115$, 3 person 200$, 4 person 230$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "4",
    image: "/images/falucaa.jpg",
    title: "1 Hour Falucaa",
    description:
      "Experience the calm beauty of the Nile River aboard a traditional felucca sailboat. With the gentle breeze, stunning views of Cairo’s corniche, and the timeless charm of the river, this peaceful cruise is the perfect way to unwind.",
    include: "include: car + rep +  entry tickets + water ",
    price:
      "1 hour 40$, 2 hours 55$, 30 min 25$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "5",
    image: "/images/Egypt-Airport-Transfers.jpg",
    title: "Transfer From Hotel to Airport or Around City",
    description:
      "Travel with ease and comfort with our professional transfer service. Whether you’re heading to or from the airport, or exploring Cairo’s downtown, we make every ride smooth, safe, and welcoming.",
    include: "include: car + guide +  water ",
    price:
      "transfer from hotel to airport or opposite: 35$, tour in downtown with guide: 50$, 4 person or more: 45$, note: you can choose car you want when 4 person or more, we have two options: expander cars or high cars, default will be standard cars",
  },
  {
    id: "6",
    image: "/images/andrea.jpg",
    title: "Short Dinner In Andrea Cruise 4 Stars",
    description:
      "Enjoy a magical evening on the Nile River aboard the Andrea 4-star dinner cruise. With soft lights, a delicious buffet, and live entertainment, this experience combines relaxation and culture in one unforgettable night.",
    include: "include:  car + rep + lunch + entry tickets + water ",
    price:
      "1 person 40$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "7",
    image: "/images/nilephorn.jpeg",
    title: "Chill Short Dinner In Nile Pharons 5 Stars",
    description:
      "Indulge in a luxurious evening on the Nile River aboard the Nile Pharaohs 5-star dinner cruise. With soft lights, a rich buffet, and captivating live performances, this elegant experience blends relaxation, fine dining, and culture.",
    include: "include:  car + rep + lunch + entry tickets + water ",
    price:
      "1 person 60$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "8",
    image: "/images/nilemaxim.jpg",
    title: "Luxury Dinner in Maxim Cruise 5 Stars",
    description:
      "Treat yourself to an unforgettable evening on the Nile River aboard the Maxim 5-star dinner cruise. With elegant ambiance, soft lights, a rich buffet, and dazzling live performances, this luxury experience blends fine dining with the timeless beauty of the Nile.",
    include: "include:  car + rep + lunch + entry tickets + water ",
    price:
      "1 person 100$, kids under 9-12 years: half price, kids under 9 years: free",
  },
];

const TourDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();   // ✅ initialize navigate
  const tour = tours.find((t) => t.id === id);

  if (!tour) return <p>Tour not found</p>;

  return (
    <section className="tour-details">
      <img src={tour.image} alt={tour.title} className="detail-img" />
      <h2>{tour.title}</h2>
      <p className="des2">{tour.description}</p>
      <p className="inc2">{tour.include}</p>
      {/* ✅ show price as plain text */}
      <p className="price2">Price Detail: {tour.price}</p>
      <br />
      <button
        className="book-btn"
        onClick={() => navigate("/booking-detail", { state: { tour } })}
      >
        Book Now
      </button>
    </section>
  );
};

export default TourDetail;
