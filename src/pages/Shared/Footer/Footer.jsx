/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="max-desktop footer-section">
        <div className="about-us">
          <p className="descriptive">About Us</p>
          <div className="links">
            <Link to="/">Why us?</Link>
            <Link to="/">How work?</Link>
          </div>
        </div>

        <div className="features">
          <p className="descriptive">Features</p>
          <div className="links">
            <Link to="/">Recipes</Link>
            <Link to="/">Add yours</Link>
            <Link to="/">Chefs</Link>
          </div>
        </div>

        <div className="links">
          <p className="descriptive">Links</p>
          <div className="links">
            <Link to="/">Download</Link>
            <Link to="/">Website</Link>
          </div>
        </div>
      </div>
      <p>Copyright &copy;DesiCuisine2023 All rights</p>
    </div>
  );
};

export default Footer;
