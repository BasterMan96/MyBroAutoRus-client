import React from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import FAQAccordion from "./FAQAccordion";
import Footer from "../components/Footer";

interface FAQItem {
  id: number;
  question: string;
  answer: string | React.ReactNode;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "Сколько времени занимает доставка автомобиля?",
    answer:
      "Срок доставки автомобиля составляет от 30 до 45 дней с момента оплаты. Точные сроки зависят от страны происхождения автомобиля и выбранного способа доставки.",
  },
  {
    id: 2,
    question: "Какие документы нужны для покупки авто?",
    answer:
      "Для покупки автомобиля вам понадобятся: паспорт РФ, водительское удостоверение. Мы помогаем с оформлением всех необходимых документов.",
  },
  {
    id: 3,
    question: "Входит ли растаможка в стоимость?",
    answer:
      "Да, стоимость 'под ключ' включает все таможенные пошлины, сертификацию и оформление документов. Никаких дополнительных платежей не требуется.",
  },
  {
    id: 4,
    question: "Можно ли осмотреть автомобиль перед покупкой?",
    answer:
      "Мы предоставляем детальные фото и видео отчеты по каждому автомобилю. При необходимости можем организовать онлайн-осмотр через видеосвязь.",
  },
  {
    id: 5,
    question: "Какая гарантия на автомобили?",
    answer:
      "Все автомобили проходят предпродажную подготовку и диагностику. Мы предоставляем гарантию 3 месяца на двигатель и трансмиссию.",
  },
  {
    id: 6,
    question: "Как происходит оплата?",
    answer:
      "Оплата происходит в несколько этапов: предоплата 30% для бронирования автомобиля, остальная сумма - перед отгрузкой. Принимаем банковский перевод и другие способы оплаты.",
  },
  {
    id: 7,
    question: "Из каких стран вы привозите автомобили?",
    answer:
      "Мы работаем с автомобилями из ОАЭ, Японии, Кореи, США и Европы. Каждая страна имеет свои преимущества в зависимости от модели автомобиля.",
  },
  {
    id: 8,
    question: "Что делать если автомобиль не понравился?",
    answer: (
      <div>
        <p>Вы можете отказаться от автомобиля на этапе:</p>
        <ul>
          <li>Просмотра фото/видео отчета</li>
          <li>Онлайн осмотра</li>
          <li>В течение 3 дней после доставки (при наличии веских причин)</li>
        </ul>
        <p>Предоплата возвращается в полном объеме.</p>
      </div>
    ),
  },
];

const FAQPage: React.FC = () => {
  const breadcrumbsItems = [
    { label: "Главная", href: "/" },
    { label: "Часто задаваемые вопросы" },
  ];

  return (
    <>
      <Header />
      <Breadcrumbs items={breadcrumbsItems} />
      <main className="faq-page">
        <div className="faq-page__container">
          <div className="faq-page__header">
            <h1 className="faq-page__title">Часто задаваемые вопросы</h1>
            <p className="faq-page__subtitle">Подборка и покупка авто</p>
          </div>

          <div className="faq-page__content">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>

          <div className="faq-page__contact">
            <h2 className="faq-page__contact-title">
              Не нашли ответ на свой вопрос?
            </h2>
            <p className="faq-page__contact-text">
              Свяжитесь с нами любым удобным способом - мы с радостью
              проконсультируем вас
            </p>
            <div className="faq-page__contact-buttons">
              <a
                href="tel:+79999999999"
                className="faq-page__contact-btn faq-page__contact-btn--primary"
              >
                Позвонить нам
              </a>
              <a
                href="mailto:info@mybroauto.ru"
                className="faq-page__contact-btn"
              >
                Написать на почту
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
