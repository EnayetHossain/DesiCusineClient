/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RecipesCard.css";

const RecipesCard = ({ recipe }) => {
  // set state to check if the user clicked on favorite button or not
  const [disable, setDisable] = useState(false);

  // notify user after clicking on the favorite button
  const favorite = () => {
    toast("Added to you favorite");
    setDisable(true);
  };

  return (
    <div>
      <div className="card">
        <div className="card-img">
          <LazyLoadImage
            src={recipe.picture}
            placeholderSrc={"/public/placeholder.jpg"}
            effect="blur"
            alt={recipe.recipe}
          />
        </div>

        <div className="chef-name">
          <p>{recipe.recipe}</p>
        </div>

        <div className="ingredients">
          <strong>Ingredients: </strong>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient} </li>
            ))}
          </ul>
        </div>

        <div className="recipe-experience">
          <p>
            <strong>Cooking method: </strong> {recipe.method}
          </p>
        </div>

        <div className="details">
          <p className="ratings">
            <Rating
              className="rating"
              readonly
              placeholderRating={recipe.ratings}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            {recipe.ratings}
          </p>
          <button
            onClick={favorite}
            className={`btn ${disable && "btn-disabled"}`}
            disabled={disable}
          >
            Favorite
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
