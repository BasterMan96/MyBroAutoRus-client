'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string | React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <div 
          key={item.id} 
          className={`faq-accordion__item ${openItemId === item.id ? 'faq-accordion__item--active' : ''}`}
        >
          <button 
            className="faq-accordion__question"
            onClick={() => toggleItem(item.id)}
            aria-expanded={openItemId === item.id}
          >
            <span className="faq-accordion__question-text">{item.question}</span>
            <span className="faq-accordion__icon">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M4 6L8 10L12 6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          
          <div 
            className="faq-accordion__answer"
            style={{ 
              maxHeight: openItemId === item.id ? '1000px' : '0',
              opacity: openItemId === item.id ? 1 : 0
            }}
          >
            <div className="faq-accordion__answer-content">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;