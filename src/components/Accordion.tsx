import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FAQItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-[18px] px-2 sm:px-0">
      {items.map((item, index) => (
        <div 
          key={index}
          className="bg-[#FEF7F1] shadow-xl w-full rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-3 py-3 sm:px-6 sm:py-5 text-left flex items-center gap-2 sm:gap-4"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <div className="flex-shrink-0">
              <Plus 
                className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              {item.question}
            </h3>
          </button>
          
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-3 sm:px-6 pb-3 sm:pb-5">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};