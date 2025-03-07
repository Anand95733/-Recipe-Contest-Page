import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      chef: PropTypes.string.isRequired,
      totalRatings: PropTypes.number.isRequired,
      avgRating: PropTypes.number.isRequired,
      uploadedOn: PropTypes.string.isRequired,
      mealType: PropTypes.string.isRequired,
      dishType: PropTypes.string.isRequired,
      testKitchenApproved: PropTypes.bool.isRequired,
      contestWinner: PropTypes.bool.isRequired,
      featured: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RecipeList;