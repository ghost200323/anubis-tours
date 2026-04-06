import React from "react";
import { Link } from "react-router-dom";

interface TourCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  include: string;
  price: string;
}

const TourCard: React.FC<TourCardProps> = ({
  image,
  title,
  description,
  link,
  include,
  price,
}) => {
  return (
    <div className="tour-card">
      <Link to={link}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p className="des">{description}</p>
        <p className="inc">{include}</p>
        <p className="price">{price}</p>

      </Link>
    </div>
  );
};

export default TourCard;
