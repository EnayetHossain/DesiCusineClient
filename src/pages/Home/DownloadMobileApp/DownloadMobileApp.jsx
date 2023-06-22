/* eslint-disable no-unused-vars */
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./DownloadMobileApp.css";

const DownloadMobileApp = () => {
  return (
    <div className="cook-section">
      <div className="download-section max-desktop">
        <div className="download-info">
          <h1 className="download-title">Download our mobile app</h1>
          <p className="download-description">
            Download our mobile app to get all the updates about our new recipes
            and dishes. Our app is Available both in google paly-store and
            app-store. To get some amazing discount up to 100%.
          </p>
          <div className="cta">
            <button className="login-btn cta-btn">
              <FaGooglePlay className="cta-icon"></FaGooglePlay> Available on
              google
            </button>
            <button className="login-btn cta-btn">
              <FaApple className="cta-icon"></FaApple> Get it on apple
            </button>
          </div>
        </div>

        <div className="download-img">
          <LazyLoadImage
            src="/mobile.jpg"
            placeholderSrc={"/placeholder.jpg"}
            effect="blur"
            alt="illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadMobileApp;
