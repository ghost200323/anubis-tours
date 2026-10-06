import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import gizaImg from "../../assets/images/giza-pyramid.jpg";
import safariImg from "../../assets/images/safari.jpg";
import meusemImg from "../../assets/images/meusem.jpg";
import falucaaImg from "../../assets/images/falucaa.jpg";
import transferImg from "../../assets/images/am2.jpeg";
import andreaImg from "../../assets/images/andrea.jpg";
import nilephornImg from "../../assets/images/nilephorn.jpeg";
import am8 from "../../assets/images/am8.jpeg";
import am9 from "../../assets/images/am9.jpeg";
import nilemaxImg from "../../assets/images/nilemaxim.jpg";

const tours = [
  {
    id: "1",
    image: gizaImg,
    title: "Pyramids of Giza",
    description:
      "Discover the timeless majesty of the Pyramids of Giza, one of the Seven Wonders of the Ancient World. Our tour is designed to make your visit effortless and unforgettable just relax and enjoy while we take care of everything.",
    include: "include: car + guide + lunch + entry tickets + water",
    price:
      "1 person 60$, 2 person 75$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "2",
    image: am8,
    title: "1‑Night / 2‑Day The Desert, The White And Black Oases",
    description:
      "Escape Cairo for an unforgettable desert adventure through Egypt’s breathtaking landscapes. This 1‑night, 2‑day safari takes you deep into the Black and White Deserts, combining natural beauty, Bedouin hospitality, and thrilling exploration. Travel in comfort by private, air‑conditioned vehicle and experience the magic of Egypt’s Western Desert under the stars.",
    include: "include: Car + Guide + Entry Fees + Full Meals",
    price:
      "1 person 300$, 2 person 520$, kids under 9-12 years: half price, kids under 9 years: free",
  },

  {
    id: "3",
    image: safariImg,
    title: "1 Hour Quad Bike",
    description:
      "Feel the thrill of the desert with the Pyramids of Giza as your backdrop. Our quad-bike tour is the perfect mix of excitement and history, giving you a safe, well-organized ride across the sands with no hassle.",
    include: "include: car + rep + entry tickets + water",
    price:
      "1 person 50$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "4",
    image: meusemImg,
    title: "Cairo Museum",
    description:
      "Step into the legendary Egyptian Museum in Tahrir Square, home to the world's greatest collection of ancient treasures. From golden artifacts of Tutankhamun to timeless statues and mummies, this tour brings history vividly to life.",
    include: "include: car + guide + entry tickets + water",
    price:
      "1 person 75$, 2 person 115$, 3 person 200$, 4 person 230$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "5",
    image: falucaaImg,
    title: "1 Hour Falucaa",
    description:
      "Experience the calm beauty of the Nile River aboard a traditional felucca sailboat. With the gentle breeze, stunning views of Cairo's corniche, and the timeless charm of the river, this peaceful cruise is the perfect way to unwind.",
    include: "include: car + rep + entry tickets + water",
    price:
      "1 hour 40$, 2 hours 55$, 30 min 25$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "6",
    image: transferImg,
    title: "Transfer From Hotel to Airport or Around City",
    description:
      "Travel with ease and comfort with our professional transfer service. Whether you're heading to or from the airport, or exploring Cairo's downtown, we make every ride smooth, safe, and welcoming.",
    include: "include: car + Rep + water",
    price:
      "transfer from hotel to airport or opposite: 35$, tour in downtown with guide: 50$, 4 person or more: 45$, note: you can choose car you want when 4 person or more, we have two options: expander cars or high cars, default will be standard cars",
  },
  {
    id: "7",
    image: andreaImg,
    title: "Short Dinner In Andrea Cruise 4 Stars",
    description:
      "Enjoy a magical evening on the Nile River aboard the Andrea 4-star dinner cruise. With soft lights, a delicious buffet, and live entertainment, this experience combines relaxation and culture in one unforgettable night.",
    include: "include: car + rep + Dinner + entry tickets + water",
    price:
      "1 person 40$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "8",
    image: nilephornImg,
    title: "Chill Short Dinner In Nile Pharons 5 Stars",
    description:
      "Indulge in a luxurious evening on the Nile River aboard the Nile Pharaohs 5-star dinner cruise. With soft lights, a rich buffet, and captivating live performances, this elegant experience blends relaxation, fine dining, and culture.",
    include: "include: car + rep + Dinner + entry tickets + water",
    price:
      "1 person 60$, kids under 9-12 years: half price, kids under 9 years: free",
  },
  {
    id: "9",
    image: nilemaxImg,
    title: "Luxury Dinner in Maxim Cruise 5 Stars",
    description:
      "Treat yourself to an unforgettable evening on the Nile River aboard the Maxim 5-star dinner cruise. With elegant ambiance, soft lights, a rich buffet, and dazzling live performances, this luxury experience blends fine dining with the timeless beauty of the Nile.",
    include: "include: car + rep + Dinner + entry tickets + water",
    price:
      "1 person 100$, kids under 9-12 years: half price, kids under 9 years: free",
  },

  {
    id: "11",
    image: am9,
    title: "Saqqara Memphis and Dahshur Pyramids Day Tour",
    description: `Step beyond the famous Giza Plateau and uncover Egypt’s Old Kingdom legacy. This tour combines three extraordinary sites in one day: Saqqara – home to the world’s first pyramid, the Step Pyramid of Djoser, and richly decorated tombs. Memphis City – Egypt’s ancient capital, where colossal statues and artifacts reveal the glory of its earliest dynasties. Dahshur – explore the Bent Pyramid and Red Pyramid, architectural milestones that paved the way for the Giza giants. With expert guides, private transport, and a relaxed pace, you’ll gain a deeper understanding of Egypt’s history and enjoy a more authentic experience away from the crowds. Perfect for history lovers seeking to go beyond Giza and discover the roots of pyramid building.`,
    include:
      "include: Car + Guide + Entry Fees + Trandational Egyptian Lunch + Water",
    price:
      "1 person 135$,2 person 260$ , kids under 9-12 years: half price, kids under 9 years: free",
  },
];

const TourDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = tours.find((t) => t.id === id);

  if (!tour) return <p>Tour not found</p>;

  return (
    <section className="tour-details">
      <img src={tour.image} alt={tour.title} className="detail-img" />
      <h2>{tour.title}</h2>
      <p className="des2">{tour.description}</p>
      <p className="inc2">{tour.include}</p>
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
