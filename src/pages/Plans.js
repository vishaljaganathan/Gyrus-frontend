import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

import "./assets/css/plans.css";

const Plans = () => {
  const courses = [
    {
      id: 1,
      type: "foundation",
      title: "Foundation Course",
      subtitle: "9th & 10th Std",
      description:
        "The foundation courses are designed to provide students of Grade IX and X with the necessary knowledge and skills helping them refine their preparation towards the NEET exams with advanced tactics. This course offers basic concepts and principles on subjects (Physics, Chemistry, Botany and Zoology) serving as a solid groundwork upon which students can build their understanding and expertise themselves deepening the readiness to tackle the NEET exams.",
      features: ["Unlimited Exercises", "Model Exams"],
      price: null,
      originalPrice: null,
      buttonText: "Coming Soon",
      disabled: true,
    },
    {
      id: 2,
      type: "regular",
      title: "Regular Course",
      subtitle: "11th & 12th Std",
      description:
        "The regular courses are planned and constructed specifically for grade XI and XII students involving a professional team of doctors who are experts in NEET coaching, clutching about approximately 36 years question bank with accurate solutions and their explanations to hone their NEET cracking skills. The course not only upgrades the student’s preparation but also elevates their quickness to conquering the NEET exams.",
      features: [
        "Unlimited Exercises",
        "37 Years NTA NEET MCQs",
        "Unlimited Model Exams",
      ],
      price: "₹ 349",
      originalPrice: "₹ 699",
      buttonText: "Subscribe Now",
    },
    {
      id: 3,
      type: "repeater",
      title: "Repeater Course",
      subtitle: "NEET 2nd Attempt",
      description:
        "The repeater course offers accessibility of updated personalized question papers, professionally designed in the form of MCQs meeting the NEET standards. Students are allowed to take tests frequently in order to improve their understanding of the subjects in meeting the pre-requisites to triumph in their NEET exams.",
      features: [
        "Unlimited Exercises",
        "37 Years NTA NEET MCQs",
        "Unlimited Model Exams",
      ],
      price: "₹ 349",
      originalPrice: "₹ 699",
      buttonText: "Subscribe Now",
    },
    {
      id: 4,
      type: "crash",
      title: "Crash Course",
      subtitle: "12th Passed out",
      description:
        "The crash courses offered by Gyrus ensures intensive short–term condensed learning opportunity, orchestrated to quickly refresh the concepts already assimilated. Students are entitled to participate in multiple special test-series providing concentrated learning experience making it ideal for the students, for a better retention, focusing on the key concepts and strategies.",
      features: [
        "Unlimited Exercises",
        "37 Years NTA NEET MCQs",
        "Unlimited Model Exams",
      ],
      price: "₹ 349",
      originalPrice: "₹ 699",
      buttonText: "Subscribe Now",
    },
  ];

  // Handler for Subscribe Now
  const handleSubscribeClick = () => {
    Swal.fire({
      title: "Scan to Download the App",
      html: `
        <div class="qr-section">
          <div class="store-badge">
            <img src="/images/qr.png" alt="App Store QR" />
            <img src="/images/appstore.png" alt="App Store Badge" />
          </div>
          <div class="store-badge">
            <img src="/images/qr.png" alt="Play Store QR" />
            <img src="/images/playstore.png" alt="Play Store Badge" />
          </div>
        </div>
        <div style="margin-top: 16px; text-align: center;">
          Scan the QR code to download the app from your preferred store.
        </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: 500,
      customClass: {
        popup: "plans-swal-popup",
      },
    });
  };

  return (
    <>
      <Navbar />
      <section className="plans-section">
        <div className="container">
          <h1 className="fw-bold">Plans & Pricing</h1>
          <h4 className="fw-bold">
            What's holding you back?
            <br />
            Pick your perfect fit and
            <br />
            <span className="text-dark">
              unlock endless possibilities today!
            </span>
          </h4>

          <div className="plans-container">
            {courses.map((course) => (
              <div key={course.id} className={`plan-box ${course.type}`}>
                <h5>
                  {course.title}
                  <br />
                  {course.subtitle}
                </h5>
                <p>{course.description}</p>
                <ul>
                  {course.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                {course.price && (
                  <div className="price">
                    {course.price}{" "}
                    <small>
                      INR + GST
                      <br />
                      <span className="text-decoration-line-through">
                        {course.originalPrice}
                      </span>
                      <br />
                      per user / 90 days
                    </small>
                  </div>
                )}
                <button
                  className="btn-plan"
                  disabled={course.disabled || false}
                  onClick={
                    course.buttonText === "Subscribe Now"
                      ? handleSubscribeClick
                      : undefined
                  }
                >
                  {course.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Plans;
