import React from "react";

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <ul className="first-row-container">
        <li>
          <h3>Inspection ID:</h3>
          <span>112233</span>
        </li>
        <li>
          <h3>Identification Number:</h3>
          <span>EV-01</span>
        </li>
        <li>
          <h3>Project:</h3>
          <span>Truck Loading Silo</span>
        </li>
        <li>
          <h3>Location:</h3>
          <span>Silo-2</span>
        </li>
      </ul>
      <ul className="second-row-container">
        <li>
          <h3>Due Date:</h3>
          <span>Mar 8 2022 10:30 am</span>
        </li>
        <li>
          <h3>Inspection Date:</h3>
          <span>Mar 8 2022 10:30 am</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetail;
