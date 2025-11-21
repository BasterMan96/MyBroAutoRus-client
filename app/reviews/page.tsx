import React from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";

const SelectAutoPage: React.FC = () => {
  const breadcrumbsItems = [
    { label: "Главная", href: "/" },
    { label: "Отзывы" },
  ];

  return (
    <>
      <Header />
      <Breadcrumbs items={breadcrumbsItems} />
      <main className="">
        <h1 className="">Отзывы</h1>
      </main>
      <Footer />
    </>
  );
};

export default SelectAutoPage;
