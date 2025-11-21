"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Закрыть">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="modal__content">
          <div className="modal__header">
            <h1 className="modal__title">Оставить заявку</h1>
            <p className="modal__subtitle">
              Мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <div className="modal__body">
            <form className="modal__form">
              <div className="modal__form-group">
                <label htmlFor="modal-name" className="modal__form-label">
                  Имя *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  className="modal__form-input"
                  placeholder="Ваше имя"
                  required
                />
              </div>

              <div className="modal__form-group">
                <label htmlFor="modal-phone" className="modal__form-label">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  className="modal__form-input"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>

              <div className="modal__form-group">
                <label htmlFor="modal-comment" className="modal__form-label">
                  Комментарий
                </label>
                <textarea
                  id="modal-comment"
                  className="modal__form-textarea"
                  placeholder="Опишите интересующий вас автомобиль или задайте вопрос"
                  rows={3}
                ></textarea>
              </div>

              <button type="submit" className="modal__submit-btn">
                Отправить заявку
              </button>
            </form>

            <div className="modal__footer">
              <p className="modal__company-info">
                <strong>ООО &quot;Кто-то&quot;</strong>
                <br />
                Что-то
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
