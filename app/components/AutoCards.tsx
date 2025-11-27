import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AutoCard {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  year: string;
  location: string;
  seats: string;
  bodyType?: string;
  engine?: string;
  transmission?: string;
  drive?: string;
  color?: string;
}

interface AutoCardsProps {
  activeFilters?: {
    bodyType: string;
    engine: string;
    transmission: string;
    drive: string;
    color: string;
  };
}

const AutoCards: React.FC<AutoCardsProps> = ({ activeFilters }) => {
  const autoCards: AutoCard[] = [
    {
      id: 1,
      title: 'Suzuki Baleno III, 1.5L, автомат',
      description: 'Пробег 61K, 2024, ОАЭ, 5 мест',
      price: '42 000$',
      image: '/cars/baleno.jpg',
      year: '2024',
      location: 'ОАЭ',
      seats: '5 мест',
      bodyType: 'Хэтчбек',
      engine: 'Атмосферный',
      transmission: 'Автоматическая',
      drive: 'Передний',
      color: 'Белый'
    },
    {
      id: 2,
      title: 'Toyota Camry, 2.5L, автомат',
      description: 'Пробег 45K, 2023, Япония, 5 мест',
      price: '38 000$',
      image: '/cars/camry.jpg',
      year: '2023',
      location: 'Япония',
      seats: '5 мест',
      bodyType: 'Седан',
      engine: 'Атмосферный',
      transmission: 'Автоматическая',
      drive: 'Передний',
      color: 'Серый'
    },

    {
    id: 3,
    title: 'Honda CR-V, 1.5L, турбо',
    description: 'Пробег 32K, 2024, США, 5 мест',
    price: '45 000$',
    image: '/cars/crv.jpg',
    year: '2024',
    location: 'США',
    seats: '5 мест',
    bodyType: 'Кроссовер',
    engine: 'Турбированный',
    transmission: 'Автоматическая',
    drive: 'Полный',
    color: 'Черный'
  },
  ];

  const filterCars = (cars: AutoCard[], filters: typeof activeFilters) => {
  if (!filters) return cars;

  return cars.filter(car => {
    if (filters.bodyType && filters.bodyType !== '' && car.bodyType !== filters.bodyType) return false;
    if (filters.bodyType && filters.bodyType !== '' && car.bodyType !== filters.bodyType) return false;
    if (filters.engine && filters.engine !== '' && car.engine !== filters.engine) return false;
    if (filters.transmission && filters.transmission !== '' && car.transmission !== filters.transmission) return false;
    if (filters.drive && filters.drive !== '' && car.drive !== filters.drive) return false;
    if (filters.color && filters.color !== '' && car.color !== filters.color) return false;
    
    return true;
  });
};

  const filteredCars = activeFilters ? filterCars(autoCards, activeFilters) : autoCards;

  return (
    <div className="auto-cards">
      <div className="auto-cards__header">
        <p className="auto-cards__count">
          Найдено автомобилей: <strong>{filteredCars.length}</strong>
        </p>
      </div>

      <div className="auto-cards__grid">
        {filteredCars.map((car) => (
          <div key={car.id} className="auto-card" itemScope itemType="https://schema.org/Vehicle">
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
              <h3 className="auto-card__title" itemProp="name">{car.title}</h3>
              <p className="auto-card__description" itemProp="description">
                {car.description}
              </p>
              
              <div className="auto-card__details">
                <span className="auto-card__detail" itemProp="vehicleModelDate">{car.year}</span>
                <span className="auto-card__detail" itemProp="productionDate">{car.location}</span>
                <span className="auto-card__detail" itemProp="seatingCapacity">{car.seats}</span>
              </div>
              
              <div className="auto-card__footer">
                <div className="auto-card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
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

      {filteredCars.length === 0 && (
        <div className="auto-cards__empty">
          <h3>Автомобили не найдены</h3>
          <p>Попробуйте изменить параметры фильтров</p>
        </div>
      )}
    </div>
  );
};

export default AutoCards;
