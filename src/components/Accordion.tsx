import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is this like a regular course?",
    answer:
      "No, this is not a traditional course. Instead of passive video lessons and quizzes, we provide a job-aligned system focused on real-world, industry-relevant projects. You'll work on deliverables that mirror actual job expectations, and receive structured support including income opportunities, guaranteed placement assistance, and lifetime access to resources and mentorship."
  },
  {
    question: "What if I don't get placed?",
    answer:
      "You won't walk away empty-handed. Even if placement doesn't happen immediately, you keep all the assets you've built—industry-recognized certifications, a polished resume, and a complete portfolio of real work. Plus, we offer lifetime re-entry support, meaning you can return at any time for additional training, job matching, and mentorship without paying again."
  },
  {
    question: "Do I need to complete all 3 phases?",
    answer:
      "No, participation in all 3 phases isn't mandatory. You're free to join at any point based on your current skill level and career goals. However, completing all three phases—Foundation, Practice, and Placement—provides the most comprehensive experience and dramatically increases your chances of long-term career success and higher income potential."
  },
  {
    question: "Is this legit and verifiable?",
    answer:
      "Yes, absolutely. Sirtifai is a legally registered company offering NSQF-certified programs, which meet national education standards. All financial transactions, including payroll and stipends, are managed transparently through Deel, a globally trusted HR and payment platform used by top companies worldwide. Everything is trackable and verifiable."
  },
  {
    question: "How quickly can I start earning?",
    answer:
      "You can begin earning in as little as 72 hours after onboarding during the Practice Phase. Once you're matched with your first project, you’ll start receiving hands-on assignments that come with real compensation. Our fast-track onboarding process is designed to get you working—and paid—almost immediately."
  }
];


export const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col justify-center items-center gap-[18px]">
      {faqData.map((item, index) => (
        <div 
          key={index}
        className="bg-[#FEF7F1] shadow-xl w-full rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-5 text-left flex items-center gap-4"
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
            <h3 className="text-lg font-semibold text-gray-900">
              {item.question}
            </h3>
          </button>
          
          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-5">
              <p className="text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};