import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav className={`breadcrumbs ${className}`}>
      <div className="container">
        <ul className="breadcrumbs__list">
          {items.map((item, index) => (
            <li key={index} className="breadcrumbs__item">
              {item.href && index < items.length - 1 ? (
                <Link href={item.href} className="breadcrumbs__link">
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumbs__current">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <span className="breadcrumbs__separator">/</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumbs;