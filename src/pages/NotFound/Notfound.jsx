/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import "./Notfound.css";

const Notfound = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="not-container">
        <h1 className="not-title">404☹</h1>
        <p className="not-description">
          the page you are trying to access does not exists
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Notfound;
