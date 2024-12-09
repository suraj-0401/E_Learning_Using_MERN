import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const FAQ = () => {
  // FAQ data
  const faqs = [
    {
      question: "What are the prerequisites for the course?",
      answer: "Basic knowledge of JavaScript is required.",
    },
    {
      question: "How long do I have access to the course?",
      answer: "You have lifetime access after enrollment.",
    },
    {
      question: "Can I get a refund?",
      answer: "Yes, we offer a 30-day money-back guarantee.",
    },
    {
      question: "Are there any live sessions?",
      answer: "Yes, there are live Q&A sessions every month.",
    },
  ];

  // State to track active question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ answer
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  //use context 
  
  const{theme}=useTheme();
  const themeClasses = theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white';

  return (
    <div className={`${themeClasses}py-16 bg-gray-50`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-white shadow-md"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <span
                  className={`text-xl transform transition ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
