/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ChefsCard from "../ChefsCard/ChefsCard";
import DownloadMobileApp from "../DownloadMobileApp/DownloadMobileApp";
import WhyUs from "../WhyUs/WhyUs";
import "./Home.css";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  // fetch all the chefs data
  useEffect(() => {
    fetch("https://chef-server-pied.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="max-desktop">
      <div className="banner-section">
        <div className="banner-info">
          <h1 className="banner-title">
            Books of authentic recipes from <br />
            best cooks
          </h1>
          <p className="banner-description">
            Welcome to our Bangladeshi restaurant! We are proud to offer you an
            authentic taste of Bangladesh right here in space. Our menu features
            a variety of traditional dishes, from flavorful curries to spicy
            appetizers and delicious desserts. Our chefs use only the freshest
            ingredients to create dishes that are both delicious and nutritious.
          </p>
        </div>
        <div className="banner-img">
          <LazyLoadImage
            src="/cook.jpg"
            placeholderSrc={"/placeholder.jpg"}
            effect="blur"
            alt="cook"
          />
        </div>
      </div>

      <div className="max-desktop cook-section">
        <h2 className="cooks-title">Our Chefs</h2>
        <div className="chefs-section">
          {chefs.map((chef) => (
            <ChefsCard key={chef.chefId} chef={chef}></ChefsCard>
          ))}
        </div>
      </div>

      <WhyUs></WhyUs>
      <DownloadMobileApp></DownloadMobileApp>
    </div>
  );
};

export default Home;
