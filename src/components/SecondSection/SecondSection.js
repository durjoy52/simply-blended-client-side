import React from "react";
import "./SecondSection.css";
const SecondSection = () => {
  return (
    <div className="subscribe-page">
      <div>
        <h1>Subscribe Newsletter</h1>
        <p>
          Enter below to be the first to know about new items and collections of
          juice
        </p>
        <input type="email" name="email" placeholder="Enter your email" />
        <button>
          <span>Subscribe</span>
        </button>
      </div>
    </div>
  );
};

export default SecondSection;
