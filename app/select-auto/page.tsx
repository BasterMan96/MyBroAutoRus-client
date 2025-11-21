import React from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import AutoFilters from "../components/AutoFilters";
import AutoCards from "../components/AutoCards";
import Footer from "../components/Footer";

const SelectAutoPage: React.FC = () => {
  const breadcrumbsItems = [
    { label: "Главная", href: "/" },
    { label: "Выбрать авто" },
  ];

  return (
    <>
      <Header />
      <Breadcrumbs items={breadcrumbsItems} />
      <main className="select-auto">
        <div className="select-auto__container">
          <h1 className="select-auto__title">Автомобили с доставкой в РФ</h1>
          <p className="select-auto__subtitle">Выбирайте авто</p>

          <div className="select-auto__content">
            <aside className="select-auto__filters">
              <AutoFilters />
            </aside>

            <section className="select-auto__results">
              <AutoCards />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SelectAutoPage;
