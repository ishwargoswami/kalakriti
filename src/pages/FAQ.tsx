import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How do I track my order?",
          answer: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or through the courier's website."
        },
        {
          question: "What are the shipping charges?",
          answer: "We offer free shipping on orders above ₹999. For orders below ₹999, a flat shipping fee of ₹99 applies. Express delivery options are available at additional costs."
        },
        {
          question: "How long will it take to receive my order?",
          answer: "Standard delivery takes 5-7 business days. Express delivery (where available) takes 2-3 business days. Delivery times may vary for remote locations."
        }
      ]
    },
    {
      category: "Products & Authenticity",
      questions: [
        {
          question: "Are your products authentic?",
          answer: "Yes, all our products are 100% authentic and handcrafted by skilled Indian artisans. We work directly with artisans and carefully verify the authenticity of each piece."
        },
        {
          question: "How do I care for handcrafted items?",
          answer: "Each product comes with specific care instructions. Generally, keep items away from direct sunlight and moisture, and clean them gently with appropriate materials."
        },
        {
          question: "Can I customize my order?",
          answer: "Yes, many of our products can be customized. Please contact our customer service team for customization options and details."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Some items like personalized products are non-returnable."
        },
        {
          question: "How do I initiate a return?",
          answer: "Log in to your account, go to order history, select the item you want to return, and follow the return instructions. You can also contact our customer support for assistance."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 7-10 business days after we receive and inspect the returned item. The amount will be credited to your original payment method."
        }
      ]
    },
    {
      category: "Account & Payment",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards, UPI, net banking, and wallet payments. All transactions are processed through secure payment gateways."
        },
        {
          question: "Is it safe to save my card details?",
          answer: "Yes, we use industry-standard encryption for all payment information. Your card details are securely stored with our payment gateway provider."
        },
        {
          question: "How do I update my account information?",
          answer: "Log in to your account, go to the profile section, and you can update your personal information, addresses, and payment methods."
        }
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Find answers to common questions about our products and services
        </p>
      </div>

      <div className="space-y-8">
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">{category.category}</h2>
            <div className="space-y-4">
              {category.questions.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-orange-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-4">
          Can't find the answer you're looking for? Please contact our customer support team.
        </p>
        <a
          href="mailto:support@kalakriti.com"
          className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition duration-300"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default FAQ;