import React from "react";

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <ul className="first-row-container">
        <li>
          Inspection ID:
          <span>112233</span>
        </li>
        <li>
          Identification Number:
          <span>EV-01</span>
        </li>
        <li>
          Project:
          <span>Truck Loading Silo</span>
        </li>
        <li>
          Location:
          <span>Silo-2</span>
        </li>
      </ul>
      <ul className="second-row-container">
        <li>
          Due Date:
          <span>Mar 8 2022 10:30 am</span>
        </li>
        <li>
          Inspection Date:
          <span>Mar 8 2022 10:30 am</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetail;
