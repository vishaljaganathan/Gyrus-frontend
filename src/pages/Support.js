import React, { useState } from "react";
import "./assets/css/faq.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPlus, FaMinus } from "react-icons/fa";

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
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Open 2nd item by default

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
    <Navbar />
    <section className="faq-section">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div className="faq-card" key={index} onClick={() => toggleFAQ(index)}>
          <div className={`faq-question ${activeIndex === index ? "open" : ""}`}>
            <span>
              {activeIndex === index ? (
                <FaMinus className="faq-icon" />
              ) : (
                <FaPlus className="faq-icon" />
              )}
              {faq.question}
            </span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </section>

    <Footer />
    </>
  );
};

export default FaqSection;
