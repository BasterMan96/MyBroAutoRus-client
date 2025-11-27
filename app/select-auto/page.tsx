'use client';

import React, { useState, useCallback } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import AutoFilters from "../components/AutoFilters";
import AutoCards from "../components/AutoCards";
import Footer from "../components/Footer";

interface ActiveFilters {
  bodyType: string;
  engine: string;
  transmission: string;
  drive: string;
  color: string;
}

const SelectAutoPage: React.FC = () => {
  const breadcrumbsItems = [
    { label: "Главная", href: "/" },
    { label: "Выбрать авто" },
  ];

  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    bodyType: '',
    engine: '',
    transmission: '',
    drive: '',
    color: ''
  });

  const handleFiltersChange = useCallback((newFilters: ActiveFilters) => {
    setActiveFilters(newFilters);
  }, []);

  const removeFilter = (filterType: keyof ActiveFilters) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: ''
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      bodyType: '',
      engine: '',
      transmission: '',
      drive: '',
      color: ''
    });
  };

  const hasActiveFilters = Object.values(activeFilters).some(value => value !== '');

  return (
    <>
      <Header />
      <Breadcrumbs items={breadcrumbsItems} />
      <main className="select-auto">
        <div className="select-auto__container">
          <h1 className="select-auto__title">Автомобили с доставкой в РФ</h1>
          <p className="select-auto__subtitle">Выбирайте авто</p>

          {hasActiveFilters && (
            <div className="active-filters">
              <div className="active-filters__header">
                <h3 className="active-filters__title">Активные фильтры:</h3>
                <button 
                  className="active-filters__clear-all"
                  onClick={clearAllFilters}
                >
                  Очистить все
                </button>
              </div>
              
              <div className="active-filters__list">
                {activeFilters.bodyType && (
                  <div className="active-filter">
                    <span className="active-filter__text">
                      Кузов: <strong>{activeFilters.bodyType}</strong>
                    </span>
                    <button 
                      className="active-filter__remove"
                      onClick={() => removeFilter('bodyType')}
                      aria-label={`Удалить фильтр кузова: ${activeFilters.bodyType}`}
                    >
                      ×
                    </button>
                  </div>
                )}
                
                {activeFilters.engine && (
                  <div className="active-filter">
                    <span className="active-filter__text">
                      Двигатель: <strong>{activeFilters.engine}</strong>
                    </span>
                    <button 
                      className="active-filter__remove"
                      onClick={() => removeFilter('engine')}
                      aria-label={`Удалить фильтр двигателя: ${activeFilters.engine}`}
                    >
                      ×
                    </button>
                  </div>
                )}
                
                {activeFilters.transmission && (
                  <div className="active-filter">
                    <span className="active-filter__text">
                      КПП: <strong>{activeFilters.transmission}</strong>
                    </span>
                    <button 
                      className="active-filter__remove"
                      onClick={() => removeFilter('transmission')}
                      aria-label={`Удалить фильтр КПП: ${activeFilters.transmission}`}
                    >
                      ×
                    </button>
                  </div>
                )}
                
                {activeFilters.drive && (
                  <div className="active-filter">
                    <span className="active-filter__text">
                      Привод: <strong>{activeFilters.drive}</strong>
                    </span>
                    <button 
                      className="active-filter__remove"
                      onClick={() => removeFilter('drive')}
                      aria-label={`Удалить фильтр привода: ${activeFilters.drive}`}
                    >
                      ×
                    </button>
                  </div>
                )}
                
                {activeFilters.color && (
                  <div className="active-filter">
                    <span className="active-filter__text">
                      Цвет: <strong>{activeFilters.color}</strong>
                    </span>
                    <button 
                      className="active-filter__remove"
                      onClick={() => removeFilter('color')}
                      aria-label={`Удалить фильтр цвета: ${activeFilters.color}`}
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="select-auto__content">
            <aside className="select-auto__filters">
              <AutoFilters 
                onFiltersChange={handleFiltersChange}
                currentFilters={activeFilters}
              />
            </aside>

            <section className="select-auto__results">
              <AutoCards activeFilters={activeFilters} />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SelectAutoPage;
