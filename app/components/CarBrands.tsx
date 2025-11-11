import React from 'react';

interface CarBrand {
  id: number;
  name: string;
  logo: string; 
}

const CarBrands: React.FC = () => {
  const brands: CarBrand[] = [
    { id: 1, name: 'BMW', logo: '/images/bmw.png' },
    { id: 2, name: 'AUDI', logo: '/images/audi.png' },
    { id: 3, name: 'MERCEDES-BENZ', logo: '/images/mercedes.png' },
    { id: 4, name: 'VOLKSWAGEN', logo: '/images/vw.png' },
    { id: 5, name: 'JAGUAR', logo: '/images/jaguar.png' },
    { id: 6, name: 'FORD', logo: '/images/ford.png' },
    { id: 7, name: 'TOYOTA', logo: '/images/toyota.png' },
    { id: 8, name: 'HYUNDAI', logo: '/images/hyundai.png' },
    { id: 9, name: 'NISSAN', logo: '/images/nissan.png' },
    { id: 10, name: 'MAZDA', logo: '/images/mazda.png' },
    { id: 11, name: 'HONDA', logo: '/images/honda.png' },
    { id: 12, name: 'RENAULT', logo: '/images/renault.png' },
    { id: 13, name: 'KIA', logo: '/images/kia.png' },
    { id: 14, name: 'OPEL', logo: '/images/opel.png' },
    { id: 15, name: 'INFINITI', logo: '/images/infiniti.png' },
    { id: 16, name: 'LAND ROVER', logo: '/images/landrover.png' },
    { id: 17, name: 'LEXUS', logo: '/images/lexus.png' },
  ];

  return (
    <section className="car-brands" itemScope itemType="https://schema.org/ItemList">
      <meta itemProp="name" content="Каталог автомобильных брендов" />
      <div className="car-brands__container">
        <h2 className="car-brands__title">Популярные бренды</h2>
        <div className="car-brands__grid">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className="car-brands__item"
              itemScope 
              itemType="https://schema.org/Brand"
              itemProp="itemListElement"
            >
              <div className="car-brands__logo-container">
                {/* В проекте здесь будет Image из Next.js */}
                <div 
                  className="car-brands__logo-placeholder"
                  style={{ backgroundImage: `url(${brand.logo})` }}
                ></div>
              </div>
              <h3 className="car-brands__name" itemProp="name">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarBrands;