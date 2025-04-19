
import React, { useState } from "react";
import "./assets/css/faq.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPlus, FaMinus, FaSearch } from "react-icons/fa";

const faqData = [
  {
    question: "What is Gyrus and how can it help me prepare for NEET?",
    answer:
      "Gyrus is a comprehensive mobile app designed specifically for NEET aspirants. It offers curated study material, practice questions, mock tests, and performance analytics to help you prepare effectively for the NEET exam.",
  },
  {
    question: "Is the Gyrus app available for both Android and iOS?",
    answer:
      "Yes, Gyrus is available for download on both the Google Play Store and the Apple App Store. You can scan the QR codes on our homepage or search for 'Gyrus NEET Prep' in your app store.",
  },
  {
    question: "Do I need an internet connection to use the app?",
    answer:
      "Some features like downloading new content and taking live mock tests require an internet connection. However, you can access previously downloaded study material and practice questions offline.",
  },
  {
    question: "Are there free resources available or is it a paid app?",
    answer:
      "Gyrus offers a range of free resources including daily practice questions and sample study material. For full access to premium content, detailed analytics, and unlimited mock tests, you can subscribe to one of our affordable plans.",
  },
  {
    question: "How can I track my NEET preparation progress in the app?",
    answer:
      "The app provides detailed performance analytics, including topic-wise strengths and weaknesses, progress charts, and personalized recommendations to help you focus on areas that need improvement.",
  },
  {
    question: "What should I do if my payment method is not working or the transaction fails?",
    answer:
      "If the payment method (e.g., card) is outdated or has insufficient funds, the transaction might not be fully processed even if the payment seems successful. Verify your payment method details and try a different method if necessary.",
  },
  {
    question: "What if there were connectivity problems during my payment?",
    answer:
      "If there were any connectivity issues during the transaction, it's possible the service didn't receive the full confirmation, even though the payment was debited. In such cases, the payment might be reversed within a few days.",
  },
  {
    question: "What information should I provide to customer support for payment issues?",
    answer:
      "If you need to contact customer support, have your payment confirmation or transaction details readily available to provide as proof.",
  },
  {
    question: "Can I transfer my reward points to another account?",
    answer:
      "Reward points are typically not transferable to other accounts. They are generally used to receive discounts.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Open 1st item by default
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Filter FAQ based on search query (case-insensitive)
  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section className="faq-section">
        <div className="faq-header">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <div className="faq-search-bar">
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="faq-search-input"
            />
            <FaSearch className="faq-search-icon" />
          </div>
        </div>
        {filteredFaqs.length === 0 ? (
          <div className="faq-no-results">No questions found.</div>
        ) : (
          filteredFaqs.map((faq, index) => (
            <div
              className="faq-card"
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className={`faq-question ${activeIndex === index ? "open" : ""}`}>
                <span className="faq-question-icon">
                  {activeIndex === index ? (
                    <FaMinus className="faq-icon" />
                  ) : (
                    <FaPlus className="faq-icon" />
                  )}
                </span>
                <span className="faq-question-text">{faq.question}</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
                {faq.answer}
              </div>
            </div>
          ))
        )}
      </section>
      <Footer />
    </>
  );
};

export default FaqSection;
