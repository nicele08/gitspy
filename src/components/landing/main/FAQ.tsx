import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

import { faqs } from '@/utils/data/faq';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleOpenIndex = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faqs"
      className="bg-gradient-to-br from-gray-50 to-gray-100  transition-all duration-300 dark:from-gray-900  transition-all duration-300 dark:to-gray-950 py-16 w-full"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900  transition-all duration-300 dark:text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white  transition-all duration-300 dark:bg-gray-700 p-4 rounded-lg shadow-md"
            >
              <div
                role="button"
                tabIndex={0}
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleOpenIndex(index)}
                onKeyDown={() => handleOpenIndex(index)}
              >
                <h3 className="text-lg font-bold text-gray-900  transition-all duration-300 dark:text-white">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <HiChevronUp
                    className="text-gray-900  transition-all duration-300 dark:text-white"
                    size={20}
                  />
                ) : (
                  <HiChevronDown
                    className="text-gray-900  transition-all duration-300 dark:text-white"
                    size={20}
                  />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-700  transition-all duration-300 dark:text-gray-300 mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
