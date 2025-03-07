import React, { useState, useEffect, useRef } from 'react';
import RecipeList from '../components/RecipeList';
import FilterSidebar from '../components/FilterSidebar';
import SearchBar from '../components/SearchBar';
import recipesData from '../data/recipes';
import logo from '../assets/logo.jpg'; // Main Logo
import { AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'; // Social Media Icons
import { createPortal } from 'react-dom';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState(recipesData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [filters, setFilters] = useState({
        attributes: [],
        mealType: [],
        dishType: [],
    });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [aboutButtonRect, setAboutButtonRect] = useState(null);
    const aboutButtonRef = useRef(null);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const toggleAbout = () => {
        setShowAbout(!showAbout);
    };

    const breakpoint = 768;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (showAbout && aboutButtonRef.current) {
            setAboutButtonRect(aboutButtonRef.current.getBoundingClientRect());
        }
    }, [showAbout]);
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleSort = (option) => {
        setSortOption(option);
    };

    const handleFilterChange = (category, value) => {
        setFilters((prevFilters) => {
            const categoryFilters = prevFilters[category];
            if (categoryFilters.includes(value)) {
                return {
                    ...prevFilters,
                    [category]: categoryFilters.filter((item) => item !== value),
                };
            } else {
                return {
                    ...prevFilters,
                    [category]: [...categoryFilters, value],
                };
            }
        });
    };

    const clearAllFilters = () => {
        setFilters({
            attributes: [],
            mealType: [],
            dishType: [],
        });
    };

    useEffect(() => {
        let filteredRecipes = recipesData.filter((recipe) => {
            const searchStr = `${recipe.name} ${recipe.chef} ${recipe.description}`.toLowerCase();
            return searchStr.includes(searchTerm.toLowerCase());
        });

        if (filters.attributes.length > 0) {
            filteredRecipes = filteredRecipes.filter((recipe) => {
                return filters.attributes.every((attribute) => recipe[attribute]);
            });
        }

        if (filters.mealType.length > 0) {
            filteredRecipes = filteredRecipes.filter((recipe) =>
                filters.mealType.includes(recipe.mealType)
            );
        }

        if (filters.dishType.length > 0) {
            filteredRecipes = filteredRecipes.filter((recipe) =>
                filters.dishType.includes(recipe.dishType)
            );
        }

        if (sortOption === 'newest') {
            filteredRecipes = [...filteredRecipes].sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
        } else if (sortOption === 'oldest') {
            filteredRecipes = [...filteredRecipes].sort((a, b) => new Date(a.uploadedOn) - new Date(b.uploadedOn));
        } else if (sortOption === 'highestRating') {
            filteredRecipes = [...filteredRecipes].sort((a, b) => b.avgRating - a.avgRating);
        } else if (sortOption === 'lowestRating') {
            filteredRecipes = [...filteredRecipes].sort((a, b) => a.avgRating - b.avgRating);
        }

        setRecipes(filteredRecipes);
    }, [searchTerm, sortOption, filters]);

    return (
        <>
            <div className="min-h-screen bg-gray-50 py-6">
                <div className="container mx-auto max-w-7xl bg-white shadow-md rounded-lg p-8">
                    <div className="flex items-center justify-between mb-6 relative">
                        <img src={logo} alt="Recipe Contest Logo" className="h-12" />
                        <h1 className="text-3xl font-extrabold text-gray-900">Recipe Contest</h1>
                        <button
                            id="about-button"
                            onClick={toggleAbout}
                            className="text-blue-500 hover:text-blue-700 focus:outline-none relative"
                            ref={aboutButtonRef}
                        >
                            About Me
                        </button>

                        {(showAbout && aboutButtonRect) && createPortal(
                            <div
                                style={{
                                    position: 'absolute',
                                    top: aboutButtonRect.bottom + 'px', // Position below the button
                                    right: 0,
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)', // White with transparency
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                    border: '1px solid rgba(200, 200, 200, 0.8)',
                                    padding: '1rem',
                                    zIndex: 10,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <div className="flex flex-row items-center space-x-2">
                                    <a href="https://leetcode.com/u/goudanand19/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                        <FaStackOverflow className="h-5 w-5" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/anand-goud-8a6009293/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                        <FaLinkedin className="h-5 w-5" />
                                    </a>
                                    <a href="https://github.com/Anand95733" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>,
                            document.body // Attach to document.body
                        )}
                    </div>

                    <SearchBar onSearch={handleSearch} />

                    <div className="flex flex-wrap lg:flex-nowrap gap-6">
                        {(windowWidth > 768 || showSidebar) && (
                            <aside className="w-full lg:w-1/4">
                                <FilterSidebar
                                    filters={filters}
                                    onFilterChange={handleFilterChange}
                                    clearAllFilters={clearAllFilters}
                                />
                            </aside>
                        )}

                        <main className="w-full lg:w-3/4">
                            <div className="flex items-center justify-between mb-4">
                                <label htmlFor="sort" className="text-gray-700 font-medium">
                                    Sort By:
                                </label>
                                <select
                                    id="sort"
                                    className="ml-2 p-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                    value={sortOption}
                                    onChange={(e) => handleSort(e.target.value)}
                                >
                                    <option value="">None</option>
                                    <option value="newest">Upload Date (Newest)</option>
                                    <option value="oldest">Upload Date (Oldest)</option>
                                    <option value="highestRating">Average Rating (Highest)</option>
                                    <option value="lowestRating">Average Rating (Lowest)</option>
                                </select>
                            </div>

                            {recipes.length === 0 ? (
                                <div className="text-gray-500 text-center py-12">
                                    No recipes match the current search and filter criteria.
                                </div>
                            ) : (
                                <RecipeList recipes={recipes} />
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipesPage;