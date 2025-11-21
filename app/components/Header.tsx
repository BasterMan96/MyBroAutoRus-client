'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "./ContactModal"; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeMenu(); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header" itemScope itemType="https://schema.org/WPHeader">
      <div className="header__container">
        <div className="header__content">
          <div className="header__logo-mobile">
            <Link href="/" className="header__logo-link" onClick={closeMenu}>
              <Image
                src="/logo.svg"
                alt="Параллельный экспорт авто"
                width={120}
                height={35}
                className="header__logo-image"
                itemProp="logo"
              />
            </Link>
          </div>

          <button 
            className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Открыть меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className="header__nav header__nav--left"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            <Link href="/select-auto" className="header__link" itemProp="url">
              <span className="header__link-text" itemProp="name">
                Выбрать авто
              </span>
            </Link>
            <Link href="/faq" className="header__link" itemProp="url">
              <span className="header__link-text" itemProp="name">
                Как мы работаем
              </span>
            </Link>
          </nav>

          <div className="header__logo">
            <Link href="/" className="header__logo-link">
              <Image
                src="/logo.svg"
                alt="Параллельный экспорт авто"
                width={160}
                height={45}
                className="header__logo-image"
                itemProp="logo"
              />
            </Link>
          </div>

          <nav
            className="header__nav header__nav--right"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            <Link href="/reviews" className="header__link" itemProp="url">
              <span className="header__link-text" itemProp="name">
                Отзывы
              </span>
            </Link>
            <Link href="/contacts" className="header__link" itemProp="url">
              <span className="header__link-text" itemProp="name">
                Контакты
              </span>
            </Link>
            <button
              className="header__link header__link--button"
              onClick={openModal}
            >
              <span className="header__link-text">Заявка</span>
            </button>
          </nav>
        </div>

        <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--active' : ''}`}>
          <nav 
            className="header__mobile-nav"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            <Link href="/select-auto" className="header__mobile-link" itemProp="url" onClick={closeMenu}>
              <span itemProp="name">Выбрать авто</span>
            </Link>
            <Link href="/reviews" className="header__mobile-link" itemProp="url" onClick={closeMenu}>
              <span itemProp="name">Отзывы</span>
            </Link>
            <Link href="/about" className="header__mobile-link" itemProp="url" onClick={closeMenu}>
              <span itemProp="name">О нас</span>
            </Link>
            <Link href="/contacts" className="header__mobile-link" itemProp="url" onClick={closeMenu}>
              <span itemProp="name">Контакты</span>
            </Link>
            <button 
              className="header__mobile-link header__mobile-link--button" 
              onClick={openModal}
            >
              <span>Заявка</span>
            </button>
          </nav>
        </div>

        <div 
          className={`header__overlay ${isMenuOpen ? 'header__overlay--active' : ''}`}
          onClick={closeMenu}
        ></div>
      </div>

      {/* Модальное окно */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;