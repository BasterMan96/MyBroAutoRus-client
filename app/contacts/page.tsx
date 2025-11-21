import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import Image from "next/image";

export const metadata = {
  title: "Контакты | ГеоПолимерСтрой",
  description: "Свяжитесь с нами для консультации",
};

export default function ContactsPage() {
  const breadcrumbsItems = [
    { label: "Главная", href: "/" },
    { label: "Контакты" },
  ];

  return (
    <>
      <Header />
      <Breadcrumbs items={breadcrumbsItems} />
      <main className="contacts-page">
        <div className="contacts-page__background">
          <Image
            src="/contacts/contBack.jpg"
            alt="Фон контактов"
            fill
            className="contacts-page__bg-image"
            priority
          />
          <div className="contacts-page__overlay"></div>
        </div>

        <div className="container">
          <h1 className="contacts-page__title">Контакты</h1>
          <div className="contacts-page__content">
            <div className="contacts-page__info">
              <h2>ООО &quot;Кто-то&quot;</h2>
              <p className="contacts-page__description">Что-то</p>

              <div className="contacts-page__contact-item">
                <div className="contact-item__icon">
                  <Image
                    src="/contacts/phone-icon.png"
                    alt="Телефон"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="contact-item__content">
                  <strong>Телефон:</strong>
                  <a href="tel:+79178725281">+7 (917) ...</a>
                </div>
              </div>

              <div className="contacts-page__contact-item">
                <div className="contact-item__icon">
                  <Image
                    src="/contacts/email-icon.png"
                    alt="Email"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="contact-item__content">
                  <strong>Email:</strong>
                  <a href="mailto:geopelmar1656@mail.ru">...@mail.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
