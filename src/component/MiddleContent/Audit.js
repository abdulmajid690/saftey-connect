import React from "react";

// style
import "../../Assets/style/style.scss";

// react icons
import { FiChevronRight } from "react-icons/fi";

const Audit = () => {
  return (
    <div className="audit-container">
      <h2>Audit and Inspection</h2>
      <div className="product-title">
        <h1>Electrical Vibrator</h1>
        <h3>Audit Summary</h3>
      </div>
      <ul className="row-links">
        <li>
          <a href="#">
            inspection
            <FiChevronRight />
          </a>
        </li>
        <li>
          <a href="#">
            in progress
            <FiChevronRight />
          </a>
        </li>
        <li>
          <a href="#">
            inspection# 112233
            <FiChevronRight />
          </a>
        </li>
        <li>
          <h2>Electrical Vibrator - EV04</h2>
        </li>
      </ul>
    </div>
  );
};

export default Audit;
