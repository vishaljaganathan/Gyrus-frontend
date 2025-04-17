import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './assets/css/home.css';

import './assets/css/styles.css';



const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
  


        {/* Added Gyrus section starts here */}
        <section className="home-section">
  <div className="left-content">
    <div className="content-block">
      <div className="top-row">
        <h2 className="main-text">
          Learn <br />Anytime<br />Anywhere
        </h2>
        <img src="/images/icon_1.png" alt="icon_1" className="icon-image" />
      </div>
      <p className="sub-text">
        Easy availability and quick accessibility online.<br />
        No one can take it away from you – that's the beauty.
      </p>
    </div>
    <div className="content-block">
      <div className="top-row">
        <h2 className="main-text">
          Why so stressed <br />about NEET?
        </h2>
        <img src="/images/icon_2.png" alt="icon_2" className="icon-image" />
      </div>
      <p className="sub-text">
        Come! Let's learn!!<br />
        BUT - with pleasure<br />
        because fun is just another word for learning.
      </p>
    </div>
  </div>
  <div className="center-content">
    <img src="/images/iphone1.png" alt="Phone Mockup 1" className="phone-image" />
    <img src="/images/iphone1_mcq.png" alt="Phone Mockup 2" className="phone-image second-phone" />
  </div>
  <div className="right-content">
    <div className="qr-section">
      <div className="store-badge">
        <img src="/images/qr.png" alt="App Store QR" />
        <img src="/images/appstore.png" alt="App Store Badge" />
      </div>
      <div className="store-badge">
        <img src="/images/qr.png" alt="Play Store QR" />
        <img src="/images/playstore.png" alt="Play Store Badge" />
      </div>
    </div>
  </div>
</section>


        {/* Why Gyrus Section */}
        <section id="why-gyrus">
          <h2>Why Gyrus?</h2>
          <div className="card-container">
            <div className="info-card orange">
              <div className="card-inner">
                <div className="card-icon">
                  <img src="/images/fun-learning-icon.png" alt="Fun Based Learning" />
                </div>
                <div className="card-text">
                  <h3>Fun Based Learning</h3>
                  <p>
                    Enjoy Gyrus application as it emphasizes making learning enjoyable and engaging. You don't have to carry any more stress on NEET. We assure you to learn with enthusiasm using your heads, hearts and hands.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card green">
              <div className="card-inner">
                <div className="card-icon">
                  <img src="/images/ncert-icon.png" alt="NEET Syllabus" />
                </div>
                <div className="card-text">
                  <h3>100% Coverage of NEET Syllabus based on NCERT</h3>
                  <p>
                    Rehearse from a vast question bank of about 36+ years of topic wise NEET – UG MCQs, with lucid explanations to increase your chances of cracking the NEET exam.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card pink">
              <div className="card-inner">
                <div className="card-icon">
                  <img src="/images/rewards-icon.png" alt="Learn and EarnRewards" />
                </div>
                <div className="card-text">
                  <h3>Learn and EarnRewards</h3>
                  <p>
                    Inviting you to a great combination of learning and rewarding opportunity. You can convert your reward points into discounts and many more. We extend our hands to amusing learning habit with a lot more bounties.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card blue">
              <div className="card-inner">
                <div className="card-icon">
                  <img src="/images/mock-test-icon.png" alt="AI Powered Analytics" />
                </div>
                <div className="card-text">
                  <h3>AI Powered Analytics</h3>
                  <p>
                    AI driven detailed analysis on your performance on the subjects attempted. Gyrus helps you comprehend your weaknesses like a personal coach with distinct suggestions and recommendations wherever required.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card cyan">
              <div className="card-inner">
                <div className="card-icon">
                  <img src="/images/ai-analytics-icon.png" alt="Mock Test" />
                </div>
                <div className="card-text">
                  <h3>All India Mock Test – NEET Pattern</h3>
                  <p>
                    Mimics the format, content and difficulty level of a real test. Provides valuable practice on national scale, helps to identify the strengths and aids in improving exam taking strategies before the actual examination.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card purple">
              <div className="card-inner">
                <div className="card-icon">
                  <img src="/images/schematics-icon.png" alt="Crunchy Explanations" />
                </div>
                <div className="card-text">
                  <h3>Crunchy Explanations with Schematics</h3>
                  <p>
                    Assists you to take delight in the concise, precise and well-structured explanations, easy to comprehend and devoid of ambiguity. The diagrams enhance understanding, making complex ideas more accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-header">
            <h2 className="about-title">About Gyrus</h2>
          </div>

          <div className="about-content">
            <p className="about-description">
              Gyrus – is an online mobile application for UG- NEET preparation possessing an organized content covering all subjects – Physics, Chemistry, Botany and Zoology. It has involved a professional team
              of doctors who are experts in NEET coaching in collaboration with software professional pioneers to provide you a user friendly NEET-prep application which upholds various levels of solving about
              approximately 36 years question bank with accurate solutions and their explanations.
            </p>
          </div>
        </section>
        {/* End Gyrus Section */}
  
      <Footer />
    </>
  );
};

export default Home;