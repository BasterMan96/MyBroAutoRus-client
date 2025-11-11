import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header" itemScope itemType="https://schema.org/WPHeader">
      <div className="header__container">
        <nav className="header__nav" itemScope itemType="https://schema.org/SiteNavigationElement">
          <Link href="/" className="header__link" itemProp="url">
            <span itemProp="name">Выбрать авто</span>
          </Link>
          <Link href="/reviews" className="header__link" itemProp="url">
            <span itemProp="name">Отзывы</span>
          </Link>
        </nav>
        <div className="header__title">
          <h1 className="header__heading">Параллельный экспорт авто</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;