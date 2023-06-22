/* eslint-disable no-unused-vars */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLoaderData } from "react-router-dom";
import RecipesCard from "../../RecipesCard/RecipesCard";
import "./ChefDetails.css";

const ChefDetails = () => {
  // get the individual chef data and that chef's recipes and convert them to json
  const cookInfo = useLoaderData();
  const cookJson = JSON.parse(cookInfo);
  const { chef, chefRecipes } = cookJson;

  return (
    <div className="max-desktop">
      <div className="chef-section">
        <div className="chef-info">
          <h1 className="chef-title">{chef.chefName}</h1>
          <p className="chef-description">{chef.bio}</p>

          <div className="additional-info">
            <p>
              Likes: <strong>{chef.likes}</strong>
            </p>
            <p>
              Recipes: <strong>{chef.recipes}</strong>
            </p>
            <p>
              Experience: <strong>{chef.chefExperience}</strong> years
            </p>
          </div>
        </div>
        <div className="chef-img">
          <LazyLoadImage
            src={chef.chefPic}
            alt={chef.chefName}
            placeholderSrc={"/public/placeholder.jpg"}
            effect="blur"
          />
        </div>
      </div>

      <div className="recipes cook-section">
        <h2 className="cooks-title">Recipes</h2>
        <div className="chefs-section">
          {chefRecipes.map((recipe) => (
            <RecipesCard key={recipe._id} recipe={recipe}></RecipesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
