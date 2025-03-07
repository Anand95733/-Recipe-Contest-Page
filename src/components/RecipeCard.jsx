import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

const RecipeCard = ({ recipe }) => {
  const { name, chef, totalRatings, avgRating, description, imgUrl } = recipe;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      {imageError ? (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500">Image not available</span>
        </div>
      ) : (
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-48 object-cover"
          onError={handleImageError}
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">Chef: {chef}</p>
        <div className="flex items-center mt-2">
          <AiFillStar className="text-yellow-500 mr-1" />
          <span className="text-yellow-500">{avgRating}</span>
          <span className="text-gray-500">({totalRatings} ratings)</span>
        </div>
        <p className="text-gray-700">{description.substring(0, 100)}...</p>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    chef: PropTypes.string.isRequired,
    totalRatings: PropTypes.number.isRequired,
    avgRating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;