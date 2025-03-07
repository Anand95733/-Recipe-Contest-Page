import React from 'react';
import PropTypes from 'prop-types';

const FilterSidebar = ({ filters, onFilterChange, clearAllFilters }) => {
    const handleCheckboxChange = (category, value) => {
        onFilterChange(category, value);
    };
    const filterOptions = {
        attributes: ['contestWinner', 'featured', 'testKitchenApproved'],
        mealType: ['Dinner', 'Lunch', 'Dessert', 'Breakfast'],
        dishType: ['Curry', 'Pizza', 'Seafood', 'Soup', 'Mexican', 'Smoothie'],
    };
    return (
        <div className="bg-gray-100 p-4 rounded-lg w-64">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            {Object.entries(filterOptions).map(([category, options]) => (
                <div key={category}>
                    <h3 className="font-semibold mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    {options.map((option) => (
                        <label key={option} className="block mb-2">
                            <input
                                type="checkbox"
                                value={option}
                                checked={filters[category].includes(option)}
                                onChange={() => handleCheckboxChange(category, option)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={clearAllFilters} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
                Clear All Filters
            </button>
        </div>
    );
};
FilterSidebar.propTypes = {
    filters: PropTypes.shape({
        attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
        mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
        dishType: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    onFilterChange: PropTypes.func.isRequired,
    clearAllFilters: PropTypes.func.isRequired,
};
export default FilterSidebar;