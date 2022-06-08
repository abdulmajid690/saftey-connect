import React from "react";
import Audit from "./MiddleContent/Audit";
import ProductDetail from "./MiddleContent/ProductDetail";
import Product from "./MiddleContent/Product";
import SubmitStatus from "./MiddleContent/SubmitStatus";

const Content = () => {
  return (
    <div className="main-content-container">
      <Audit />
      <ProductDetail />
      <Product />
      <SubmitStatus />
    </div>
  );
};

export default Content;
