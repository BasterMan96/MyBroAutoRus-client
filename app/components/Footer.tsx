import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="footer" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">
            <Image
              src="/footer.svg"
              alt="MY BRO AUTO - Параллельный экспорт автомобилей"
              width={400}
              height={400}
              className="footer__logo-image"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
