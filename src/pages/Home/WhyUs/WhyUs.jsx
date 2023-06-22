/* eslint-disable no-unused-vars */
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div>
      <div className="max-desktop cook-section">
        <h1 className="cooks-title">Why DesiCuisine?</h1>
        <div className="why-section">
          <div className="why-card">
            <FaMapMarkerAlt className="icon"></FaMapMarkerAlt>
            <p>
              We deliver your food in you location. You can be wherever you like
              you food will come to you. You can oder your food online using our
              app or you can directly call our service to order. jus leave your
              location and the food to come to you.
            </p>
          </div>

          <div className="why-card">
            <FaPhoneAlt className="icon"></FaPhoneAlt>
            <p>
              24/7 Customer service. We are here all time at your service. You
              will the best customer service. And we are happy to help you in
              any shape or way.
            </p>
          </div>

          <div className="why-card">
            <IoFastFoodOutline className="icon"></IoFastFoodOutline>
            <p>
              We provide you high quality and healthy foods. Safety and health
              is our primary goal. As there a saying {"You become what you eat"}
              . So et carefully. Eat at DesiCuisine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
