import React from 'react';
import Breadcrumbs from './Breadcrumbs';

interface CarBrand {
  id: number;
  name: string;
  logo: string; 
}

const CarBrands: React.FC = () => {
  const breadcrumbsItems = [
    { label: 'Главная', href: '/' },
    { label: 'Заказать авто' }
  ];

  const brands: CarBrand[] = [
    { id: 1, name: 'BMW', logo: '/CarBrands/bmw.svg' },
    { id: 2, name: 'AUDI', logo: '/CarBrands/audi.svg' },
    { id: 3, name: 'NISSAN', logo: '/CarBrands/nissan.svg' },
    { id: 4, name: 'JEEP', logo: '/CarBrands/jeep.svg' },
    { id: 5, name: 'LAND ROVER', logo: '/CarBrands/land-rover.svg' },
    { id: 6, name: 'HYUNDAI', logo: '/CarBrands/hyundai.svg' },
    { id: 7, name: 'LEXUS', logo: '/CarBrands/lexus.svg' },
    { id: 8, name: 'MAZDA', logo: '/CarBrands/mazda.svg' },
    { id: 9, name: 'HONDA', logo: '/CarBrands/honda.svg' },
    { id: 10, name: 'INFINITI', logo: '/CarBrands/infiniti.svg' },
    { id: 11, name: 'KIA', logo: '/CarBrands/kia.svg' },
    { id: 12, name: 'OPEL', logo: '/CarBrands/opel.svg' },
    { id: 13, name: 'MITSUBISHI', logo: '/CarBrands/mitsubishi.svg' },
    { id: 14, name: 'CHEVROLET', logo: '/CarBrands/chevrolet.svg' },
    { id: 15, name: 'VOLKSWAGEN', logo: '/CarBrands/volkswagen.svg' },
    { id: 16, name: 'JAGUAR', logo: '/CarBrands/jaguar.svg' },
    { id: 17, name: 'FORD', logo: '/CarBrands/ford.svg' },
    { id: 18, name: 'VOLVO', logo: '/CarBrands/volvo.svg' },
    { id: 19, name: 'TOYOTA', logo: '/CarBrands/toyota.svg' },
    { id: 20, name: 'MERCEDES-BENZ', logo: '/CarBrands/mercedes.svg' },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbsItems} />
      <section className="car-brands" itemScope itemType="https://schema.org/ItemList">
        <meta itemProp="name" content="Каталог автомобильных брендов" />
        <div className="car-brands__container">
          <h2 className="car-brands__title">Параллельный экспорт авто</h2>
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
    </>
  );
};

export default CarBrands;