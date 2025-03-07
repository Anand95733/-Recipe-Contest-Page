import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
    const handleChange = (event) => {
        const searchTerm = event.target.value;
        onSearch(searchTerm);
    };
    return (
        <div className="relative mb-4">
            <input
                type="text"
                placeholder="Search recipes..."
                className="w-full p-2 border rounded-lg pl-10"
                onChange={handleChange}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
            </div>
        </div>
    );
};
SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
export default SearchBar;