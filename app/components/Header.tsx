// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="header" itemScope itemType="https://schema.org/WPHeader">
      <div className="header__container">
        <div className="header__content">
          <nav className="header__nav header__nav--left" itemScope itemType="https://schema.org/SiteNavigationElement">
            <Link href="/" className="header__link" itemProp="url">
              <span className="header__link-text" itemProp="name">Выбрать авто</span>
            </Link>
            <Link href="/reviews" className="header__link" itemProp="url">
              <span className="header__link-text" itemProp="name">Отзывы</span>
            </Link>
          </nav>

          <div className="header__logo">
            <Link href="/" className="header__logo-link">
              <Image 
                src="/logo.svg" 
                alt="Параллельный экспорт авто - выбор автомобилей различных брендов" 
                width={160} 
                height={45}
                className="header__logo-image"
                itemProp="logo"
              />
            </Link>
          </div>

          <nav className="header__nav header__nav--right" itemScope itemType="https://schema.org/SiteNavigationElement">
            <Link href="/about" className="header__link" itemProp="url">
              <span className="header__link-text" itemProp="name">О нас</span>
            </Link>
            <Link href="/contacts" className="header__link" itemProp="url">
              <span className="header__link-text" itemProp="name">Контакты</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;