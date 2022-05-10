import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import "./SecondSection.css";
const SecondSection = () => {
  return (
    <div className="subscribe-page mb-3">
      <div>
        <h1>Subscribe Newsletter</h1>
        <p>
          Enter below to be the first to know about new items and collections of
          juice
        </p>
        <input type="email" name="email" placeholder="Enter your email" />
        <button>
          <span>Subscribe</span> 
          <AiOutlineArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default SecondSection;
