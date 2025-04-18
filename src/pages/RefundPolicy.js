import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './assets/css/policy.css';

const RefundPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="privacy-policy-container">
        <h1>Refund Policy</h1>
        <div className="privacy-content">
          <h2>1. Cancellation</h2>
          <ol>
            <li>
              Gyrusneet.com doesn't charge cancellation fees or have contracts, so you can cancel your subscription at limited time without penalty. 
              If 3 working days have gone by since your subscription, unfortunately we can't offer you a refund.
            </li>
            <li>
              If you cancel during your billing period, you can continue to use gyrusneet.com until your account is automatically canceled at the end of the period.
            </li>
          </ol>

          <h2>2. Refund</h2>
          <ol>
            <li>
              Our refund policy lasts 3 working days. If 3 working days have gone by since your subscription, unfortunately we can't offer you a refund. 
              To be eligible for a refund, your subscription must be not in use. To complete your refund, we require a receipt or proof of purchase.
              
              <ol type="a">
                <li>
                  <strong>Refunds (if applicable)</strong>
                  <p>
                    If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, 
                    within a certain amount of days.
                  </p>
                </li>
                <li>
                  <strong>Late or missing refunds (if applicable)</strong>
                  <p>
                    If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, 
                    it may take some time before your refund is officially posted.
                  </p>
                  <p>
                    Next contact your bank. There is often some processing time before a refund is posted.
                  </p>
                  <p>
                    If you've done all of this and you still have not received your refund yet, please contact us at 
                  </p>
                  <a href="mailto:support@gyrusneet.com">support@gyrusneet.com</a>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;