import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AutoCard {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  year: string;
  location: string;
  seats: string;
}

const AutoCards: React.FC = () => {
  const autoCards: AutoCard[] = [
    {
      id: 1,
      title: "Suzuki Baleno III, 1.5L, автомат",
      description: "Пробег 61K, 2024, ОАЭ, 5 мест",
      price: "42 000$",
      image: "/cars/baleno.jpg",
      year: "2024",
      location: "ОАЭ",
      seats: "5 мест",
    },
    {
      id: 2,
      title: "Toyota Camry, 2.5L, автомат",
      description: "Пробег 45K, 2023, Япония, 5 мест",
      price: "38 000$",
      image: "/cars/camry.jpg",
      year: "2023",
      location: "Япония",
      seats: "5 мест",
    },
    {
      id: 3,
      title: "Honda CR-V, 1.5L, автомат",
      description: "Пробег 32K, 2024, США, 5 мест",
      price: "45 000$",
      image: "/cars/crv.jpg",
      year: "2024",
      location: "США",
      seats: "5 мест",
    },
    // Добавить больше автомобилей по необходимости
  ];

  return (
    <div className="auto-cards">
      <div className="auto-cards__grid">
        {autoCards.map((car) => (
          <div
            key={car.id}
            className="auto-card"
            itemScope
            itemType="https://schema.org/Vehicle"
          >
            <div className="auto-card__image">
              <Image
                src={car.image}
                alt={car.title}
                width={300}
                height={200}
                className="auto-card__img"
              />
            </div>

            <div className="auto-card__content">
              <h3 className="auto-card__title" itemProp="name">
                {car.title}
              </h3>
              <p className="auto-card__description" itemProp="description">
                {car.description}
              </p>

              <div className="auto-card__details">
                <span className="auto-card__detail" itemProp="vehicleModelDate">
                  {car.year}
                </span>
                <span className="auto-card__detail" itemProp="productionDate">
                  {car.location}
                </span>
                <span className="auto-card__detail" itemProp="seatingCapacity">
                  {car.seats}
                </span>
              </div>

              <div className="auto-card__footer">
                <div
                  className="auto-card__price"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <span itemProp="price">{car.price}</span>
                  <meta itemProp="priceCurrency" content="USD" />
                </div>

                <Link href={`/auto/${car.id}`} className="auto-card__button">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoCards;
