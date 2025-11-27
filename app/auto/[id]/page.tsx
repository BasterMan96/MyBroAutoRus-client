'use client';

import React, { useState } from "react";
import Header from "@/app/components/Header";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Footer from "@/app/components/Footer";
import Image from "next/image";

interface AutoDetailPageProps {
  params: {
    id: string;
  };
}

const AutoDetailPage: React.FC<AutoDetailPageProps> = ({ params }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const carData = {
    id: params.id,
    title: "Suzuki Baleno III, 1.5L, автомат",
    description: "Пробег GLX, 2024, ОАЭ, 5 мест",
    price: "42 000$",
    priceRub: "2 055 000 ₽",
    images: [
      "/cars/baleno/1.jpg",
      "/cars/baleno/2.jpg",
      "/cars/baleno/3.jpg",
      "/cars/baleno/4.jpg",
      "/cars/baleno/5.jpg",
      "/cars/baleno/6.jpg",
    ],
    specs: {
      year: "2024",
      configuration: "GLX",
      bodyType: "Хэтчбек",
      engine: "Атмосферный, 1.5 л, (103 л.с.), бензин",
      transmission: "Автомат",
      drive: "Передний",
      color: "Белый",
      seats: "5 мест",
    },
    descriptionText:
      "Suzuki Baleno III. Новый автомобиль по системе параллельного импорта. Отличное состояние, полная комплектация.",
    delivery: {
      time: "30-45 дней",
      cost: "Включено в стоимость",
    },
  };

  const breadcrumbsItems = [
    { label: "Главная", href: "/" },
    { label: "Заказать авто", href: "/select-auto" },
    { label: "Suzuki Baleno" },
  ];

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === carData.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? carData.images.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'ArrowLeft') handlePrevImage();
  };

  return (
    <>
      <Header />
      <Breadcrumbs items={breadcrumbsItems} />

      <main className="auto-detail">
        <div className="auto-detail__container">
          <div className="auto-detail__header">
            <h1 className="auto-detail__title">{carData.title}</h1>
            <p className="auto-detail__subtitle">{carData.description}</p>
          </div>

          <div className="auto-detail__content">
            {/* Основной контент - фотографии и вся информация */}
            <div className="auto-detail__main-content">
              {/* Галерея */}
              <div className="auto-detail__gallery">
                <div 
                  className="auto-detail__main-image"
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                >
                  <Image
                    src={carData.images[selectedImageIndex]}
                    alt={carData.title}
                    width={800}
                    height={500}
                    priority
                  />
                  
                  {/* Кнопки навигации */}
                  {carData.images.length > 1 && (
                    <>
                      <button 
                        className="auto-detail__nav-btn auto-detail__nav-btn--prev"
                        onClick={handlePrevImage}
                        aria-label="Предыдущее фото"
                      >
                        ‹
                      </button>
                      <button 
                        className="auto-detail__nav-btn auto-detail__nav-btn--next"
                        onClick={handleNextImage}
                        aria-label="Следующее фото"
                      >
                        ›
                      </button>
                    </>
                  )}
                  
                  {/* Индикатор текущего фото */}
                  <div className="auto-detail__image-counter">
                    {selectedImageIndex + 1} / {carData.images.length}
                  </div>
                </div>
              </div>

              {/* Все остальные элементы под фотографиями */}
              <div className="auto-detail__right">
                {/* Блок с заказом и характеристиками в одну строку */}
                <div className="auto-detail__top-section">
                  <div className="auto-detail__order-card">
                    <div className="auto-detail__price-section">
                      <h3 className="auto-detail__price-title">СТОИМОСТЬ АВТО</h3>
                      <div className="auto-detail__price">
                        <span className="auto-detail__price-usd">
                          {carData.price}
                        </span>
                        <span className="auto-detail__price-rub">
                          {carData.priceRub}
                        </span>
                      </div>
                    </div>

                    <div className="auto-detail__delivery-info">
                      <div className="auto-detail__delivery-item">
                        <span className="auto-detail__delivery-label">
                          Доставка под ключ
                        </span>
                        <span className="auto-detail__delivery-value">
                          Включено
                        </span>
                      </div>
                      <div className="auto-detail__delivery-item">
                        <span className="auto-detail__delivery-label">
                          Срок доставки
                        </span>
                        <span className="auto-detail__delivery-value">
                          {carData.delivery.time}
                        </span>
                      </div>
                    </div>

                    <button className="auto-detail__order-btn">
                      ЗАКАЗАТЬ АВТО
                    </button>

                    <p className="auto-detail__price-note">
                      Итоговая стоимость будет рассчитана нашим менеджером для
                      Вашего города и учитывая курс валют и конгресс
                    </p>
                  </div>

                  {/* Характеристики */}
                  <div className="auto-detail__specs">
                    <h3 className="auto-detail__specs-title">Характеристики</h3>
                    <div className="auto-detail__specs-grid">
                      <div className="auto-detail__spec-item">
                        <span className="auto-detail__spec-label">
                          Год выпуска:
                        </span>
                        <span className="auto-detail__spec-value">
                          {carData.specs.year}
                        </span>
                      </div>
                      <div className="auto-detail__spec-item">
                        <span className="auto-detail__spec-label">
                          Комплектация:
                        </span>
                        <span className="auto-detail__spec-value">
                          {carData.specs.configuration}
                        </span>
                      </div>
                      <div className="auto-detail__spec-item">
                        <span className="auto-detail__spec-label">Кузов:</span>
                        <span className="auto-detail__spec-value">
                          {carData.specs.bodyType}
                        </span>
                      </div>
                      <div className="auto-detail__spec-item">
                        <span className="auto-detail__spec-label">Двигатель:</span>
                        <span className="auto-detail__spec-value">
                          {carData.specs.engine}
                        </span>
                      </div>
                      <div className="auto-detail__spec-item">
                        <span className="auto-detail__spec-label">
                          Трансмиссия:
                        </span>
                        <span className="auto-detail__spec-value">
                          {carData.specs.transmission}
                        </span>
                      </div>
                      <div className="auto-detail__spec-item">
                        <span className="auto-detail__spec-label">Привод:</span>
                        <span className="auto-detail__spec-value">
                          {carData.specs.drive}
                        </span>
                      </div>
                      <div className="auto-detail__spec-item">
                        <span className="auto-detail__spec-label">
                          Цвет кузова:
                        </span>
                        <span className="auto-detail__spec-value">
                          {carData.specs.color}
                        </span>
                      </div>
                      <div className="auto-detail__spec-item">
                        <span className="auto-detail__spec-label">
                          Количество мест:
                        </span>
                        <span className="auto-detail__spec-value">
                          {carData.specs.seats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Описание */}
                <div className="auto-detail__description">
                  <h3 className="auto-detail__description-title">Описание</h3>
                  <p className="auto-detail__description-text">
                    {carData.descriptionText}
                  </p>
                  <div className="auto-detail__seller-comment">
                    <strong>Комментарий продавца:</strong>
                    <p>
                      Suzuki Baleno III. Новый автомобиль по системе параллельного
                      импорта.
                    </p>
                  </div>
                </div>

                {/* Форма запроса */}
                <div className="auto-detail__request-form">
                  <h3 className="auto-detail__form-title">
                    Получить предложение
                  </h3>
                  <form className="auto-detail__form">
                    <div className="auto-detail__form-group">
                      <label htmlFor="name" className="auto-detail__form-label">
                        Имя
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="auto-detail__form-input"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div className="auto-detail__form-group">
                      <label htmlFor="phone" className="auto-detail__form-label">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="auto-detail__form-input"
                        placeholder="+7 (___)-___-__-__"
                      />
                    </div>
                    <div className="auto-detail__form-group">
                      <label
                        htmlFor="comment"
                        className="auto-detail__form-label"
                      >
                        Комментарий
                      </label>
                      <textarea
                        id="comment"
                        className="auto-detail__form-textarea"
                        placeholder="Ваш комментарий или вопросы"
                        rows={4}
                      ></textarea>
                    </div>

                    <div className="auto-detail__form-agreement">
                      <label className="auto-detail__checkbox-label">
                        <input
                          type="checkbox"
                          className="auto-detail__checkbox"
                        />
                        Нажимая «Получить предложение», я принимаю условия
                        обработки данных
                      </label>
                    </div>

                    <button type="submit" className="auto-detail__submit-btn">
                      Получить предложение
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AutoDetailPage;
