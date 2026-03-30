import React from "react";
import { Link } from "react-router-dom";
import "./terms.css";

const Terms = () => {
  return (
    <div className="page">
      <div className="header">
        <div className="container">
          <p className="title">Terms of Service | New United Benefits</p>
        </div>
      </div>
      <div className="translations-content-container">
        <div className="container">
          <div
            className="tab-content translations-content-item en visible"
            id="en"
          >
            <h1>Terms of Service</h1>
            <p>
              Welcome to New United Benefits! These Terms of Service govern your
              use of our website and the services we provide. By using our
              website, you agree to these Terms of Service. If you do not agree
              to these Terms of Service, please do not use our website.
            </p>
            <h2>User Conduct</h2>
            <p>
              You agree to use our website and services in a lawful and
              appropriate manner. You must not:
            </p>
            <ul>
              <li>Use our website for any illegal purpose.</li>
              <li>
                Upload or transmit any content that is offensive, harmful, or
                infringes on the rights of others.
              </li>
              <li>
                Attempt to gain unauthorized access to our website or our
                systems.
              </li>
              <li>Interfere with or disrupt our website or our services.</li>
            </ul>
            <h2>Limitation of Liability</h2>
            <p>
              We are not responsible for any products or services purchased
              through our website or any third-party websites we link to. We do
              not warrant the accuracy or completeness of any information
              provided on our website. We are not liable for any damages or
              losses arising from your use of our website or your reliance on
              any information provided on our website.
            </p>
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold us harmless from any claims,
              damages, or losses arising from your use of our website or your
              breach of these Terms of Service.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and
              images, is the property of New United Benefits or its content
              suppliers and is protected by United States and international
              copyright laws.
            </p>
            <h2>Privacy Policy</h2>
            <p>
              Please review our{" "}
              <Link to="/privacy-policy">Privacy Policy</Link> for information
              about how we collect, use, and disclose your personal information.
            </p>
            <h2>Updates to Terms of Service</h2>
            <p>
              We may update these Terms of Service from time to time. We
              encourage you to review these Terms of Service periodically to
              stay informed about any changes.
            </p>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms of Service
              or our website, please contact us at:
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+18333530855">(833) 353-0855</a>
            </p>
            <p>
              Mailing Address: 25 Southeast 2nd Avenue STE 550, PMB 63, Miami,
              FL 33131, United States
            </p>
            <h2>Business Disclosure</h2>
            <p>
              Disclaimer: This website is a marketing service and is not an
              insurance agency, broker, or insurance carrier. We do not offer,
              sell, or underwrite insurance products directly. The purpose of
              this website is to connect consumers with licensed insurance
              agents or insurance providers who may offer Final Expense or
              related life insurance products. By submitting your information,
              you agree that a licensed insurance agent or insurance company
              may contact you by phone call, text message, or email regarding
              insurance products, including Final Expense coverage. Consent is
              not a condition of purchase. Coverage availability, benefits, and
              premiums vary based on age, health, location, and other eligibility
              factors. Not all applicants will qualify for coverage. Any
              coverage amounts or benefit examples referenced on this website
              are illustrative and are not guaranteed. This website is not
              affiliated with, endorsed by, or operated by any government agency.
              Insurance products are offered through licensed insurance agents
              and carriers where permitted by law.
            </p>
            <p>Owned &amp; Operated by Essential Property Holdings</p>
            <p>© 2026 New United Benefits. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
