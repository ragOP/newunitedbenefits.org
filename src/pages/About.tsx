import React from "react";
import "./terms.css";

const About = () => {
  return (
    <div className="page">
      <div className="header">
        <div className="container">
          <p className="title">About Us | New United Benefits</p>
        </div>
      </div>
      <div className="translations-content-container">
        <div className="container">
          <div
            className="tab-content translations-content-item en visible"
            id="en"
          >
            <h1>About New United Benefits</h1>
            <p>
              New United Benefits helps adults across the United States explore
              final expense and life insurance options. We connect site visitors
              with licensed insurance providers and agents so they can review
              available plans, compare benefit options, and make informed
              decisions.
            </p>
            <p>
              We are an independent marketing partner and not an insurance
              company or insurance agency. We may receive compensation when users
              interact with our partners through this website.
            </p>
            <h2>What we do</h2>
            <ul>
              <li>
                Provide educational information about final expense and life
                insurance coverage.
              </li>
              <li>
                Connect consumers with licensed providers who can discuss plan
                options.
              </li>
              <li>
                Help visitors understand common eligibility and coverage
                considerations.
              </li>
            </ul>
            <h2>What we do not do</h2>
            <ul>
              <li>
                We do not underwrite, sell, or issue insurance policies directly.
              </li>
              <li>
                We do not guarantee coverage, approval, savings, or specific
                policy terms.
              </li>
            </ul>
            <h2>Who operates this site</h2>
            <p>
              Mailing Address: 25 Southeast 2nd Avenue STE 550, PMB 63, Miami,
              FL 33131, United States
            </p>
            <p>
              New United Benefits is owned and operated by Essential Property
              Holdings.
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+18333530855">(833) 353-0855</a>
            </p>
            <p>© 2026 New United Benefits. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
