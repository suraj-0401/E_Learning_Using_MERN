import React, { useState } from 'react';

const FAQs = [
  "What's the best way to prepare for coding interviews?",
  "How should I approach system design interview questions?",
  "Are the EduVerse  SDE sheet questions enough for interview preparation?",
  "How do I get the most out of your website or EduVerse  community?",
  "What are the essential things to cover in core coding subjects?",
  "Do you offer any mentorship or career guidance programs?",
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-800 hover:bg-gray-700"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg">{faq}</span>
              <span
                className={`text-red-500 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-45' : 'rotate-0'
                }`}
              >
                +
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-900">
                <p className="text-gray-300">Answer to the question goes here.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
