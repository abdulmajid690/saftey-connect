import React from "react";

const SubmitStatus = () => {
  return (
    <div className="submit-container">
      <ul className="first-row">
        <li>
          Inspection By:
          <span>shafiq khattak</span>
        </li>
        <li>
          Submitted To:
          <select className="dropdown">
            <option selected>waseem ali</option>
            <option>sajad khan</option>
            <option>sohail ali</option>
            <option>ahmed khan</option>
            <option>shafiq khattak</option>
          </select>
        </li>
      </ul>
      <ul className="second-row">
        <li>
          Status:
          <span>pending approval</span>
        </li>
      </ul>
      <div className="btn-container">
        <button className="btn-success">print</button>
      </div>
    </div>
  );
};

export default SubmitStatus;
