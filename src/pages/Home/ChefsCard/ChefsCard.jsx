/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "./ChefsCard.css";

const ChefsCard = ({ chef }) => {
  // get the chefs data from the parent component to be used in card
  const { chefId, chefPic, chefName, likes, recipes, chefExperience } = chef;

  return (
    <div className="card">
      <div className="card-img">
        <LazyLoadImage
          src={chefPic}
          placeholderSrc={"/public/placeholder.jpg"}
          effect="blur"
          alt={chefName}
        />
      </div>

      <div className="chef-name">
        <p>{chefName}</p>
      </div>

      <div className="recipe-experience">
        <p>Recipes: {recipes}</p>
        <p>{chefExperience} Years of experience</p>
      </div>

      <div className="details">
        <Link to={`chef/${chefId}`}>View Recipes</Link>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
};

export default ChefsCard;
