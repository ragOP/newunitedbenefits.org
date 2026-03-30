import React from "react";
import "./terms.css";

const Contact = () => {
  return (
    <div className="page">
      <div className="header">
        <div className="container">
          <p className="title">Contact Us | New United Benefits</p>
        </div>
      </div>
      <div className="translations-content-container">
        <div className="container">
          <div
            className="tab-content translations-content-item en visible"
            id="en"
          >
            <h1>Contact Us</h1>
            <p>
              We are here to help you explore final expense and life insurance
              options. For assistance, please contact our team using the phone
              number listed below.
            </p>
            <h2>Customer support</h2>
            <ul>
              <li>
                Phone:{" "}
                <a href="tel:+18333530855">(833) 353-0855</a>
              </li>
              <li>
                Mailing Address: 25 Southeast 2nd Avenue STE 550, PMB 63,
                Miami, FL 33131, United States
              </li>
              <li>
                Hours: Monday through Friday, 9:00 a.m. to 5:00 p.m. Eastern
                Time
              </li>
            </ul>
            <h2>Privacy requests</h2>
            <p>
              For privacy-related requests, including requests to access or delete
              information, please call{" "}
              <a href="tel:+18333530855">(833) 353-0855</a>.
            </p>
            <h2>Response times</h2>
            <p>
              For the fastest assistance, call{" "}
              <a href="tel:+18333530855">(833) 353-0855</a> during normal
              business hours.
            </p>
            <p>© 2026 New United Benefits. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
