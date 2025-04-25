import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How is this book different from other self-help books?',
    answer: 'The Game Changer doesn\'t just focus on motivation or inspiration like many self-help books. Instead, it provides a complete, actionable system with specific steps and tools that you can implement immediately. It combines cutting-edge psychology, practical strategies, and a proven framework that has transformed thousands of lives across diverse backgrounds and circumstances.'
  },
  {
    question: 'Will this work for me if I\'ve tried other programs before without success?',
    answer: 'Absolutely. The Game Changer methodology is specifically designed to work for people who have tried other approaches without lasting results. What makes this different is our focus on addressing the root causes of your challenges, not just the symptoms. We\'ve helped thousands of people who previously struggled with other programs finally achieve breakthrough results.'
  },
  {
    question: 'How quickly can I expect to see results?',
    answer: 'Many readers report experiencing significant mindset shifts within the first week of implementing the strategies. Tangible results typically begin to appear within 30 days as you apply the system consistently. However, the most profound and lasting transformations develop over 90-180 days as you master the full methodology and integrate it into your daily life.'
  },
  {
    question: 'Is there any support available if I have questions while implementing the strategies?',
    answer: 'Yes! Your purchase includes access to our private community where you can connect with other readers, ask questions, and receive guidance. You\'ll also receive regular email support with additional tips and insights to help you implement the strategies effectively.'
  },
  {
    question: 'What if it doesn\'t work for me? Is there a guarantee?',
    answer: 'We stand behind the effectiveness of this book with our unconditional 60-day money-back guarantee. If you don\'t experience positive changes after sincerely implementing the strategies, simply contact our support team for a complete refund - and you can even keep the book.'
  },
  {
    question: 'Do I need to have any special knowledge or experience to benefit from this book?',
    answer: 'Not at all. The Game Changer is written specifically to be accessible to everyone, regardless of your background, education level, or previous experience with personal development. We guide you step-by-step through each concept and strategy, making it easy to understand and implement.'
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Get answers to the most common questions about The Game Changer
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;