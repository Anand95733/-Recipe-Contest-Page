# Recipe Contest Page

A frontend application built with React.js to display and manage recipes for an online recipe contest. Features include responsive design, search, filtering, and sorting.

## Table of Contents

1.  [Objective](#objective)
2.  [Features](#features)
3.  [Technologies Used](#technologies-used)
4.  [Prerequisites](#prerequisites)
5.  [Installation](#installation)
6.  [Running the Application](#running-the-application)
7.  [Folder Structure](#folder-structure)
8.  [Code Structure](#code-structure)
9.  [Contributing](#contributing)
10. [Deployment](#deployment)
11. [Contact](#contact)

## Objective

The purpose of this project was to develop a dynamic and responsive frontend interface for a recipe contest application. It involved creating a visually appealing user experience while implementing core functionalities such as searching, filtering, and sorting recipes.

## Features

*   **Responsive Design:** Adapts to different screen sizes (desktop, tablet, mobile).
*   **Search:** Allows users to search recipes based on recipe name, chef name, and description.
*   **Sorting:** Offers sorting options for recipes by upload date (newest/oldest) and average rating (highest/lowest).
*   **Filtering:** Enables filtering of recipes based on attributes (Contest Winner, Featured, Test Kitchen-Approved), meal type (Dinner, Lunch, Dessert, Breakfast), and dish type (Curry, Pizza, Seafood, Soup, Mexican, Smoothie).
*   **Clear Filters:** Provides functionality to clear all filters at once or remove individual filters separately.
*   **No Results Display:** Displays a clear message and image when no recipes match the search and filter criteria.
*   **"About Me" Section:** Includes an "About Me" link with a popup displaying social media profiles.

## Technologies Used

*   **React.js:** JavaScript library for building user interfaces.
*   **Tailwind CSS:** CSS framework for styling the application.
*   **react-icons:** Library for including icons.
*   **react-router-dom:** Library for implementing routing in React applications.
*   **react-dom:** Library for React
*   **vite:** A more modern development experience.
*   **Cloudinary:** Image hosting and transformation service.

## Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js:** (version 16 or higher) - [https://nodejs.org/](https://nodejs.org/)
*   **npm:** (Node Package Manager, usually included with Node.js)

## Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Anand95733/-Recipe-Contest-Page/blob/main/src/data/recipes.js
    cd recipe-contest-page
    ```

    

2.  **Install dependencies:**

    ```bash
    npm install
    ```

    This command will install all the necessary packages listed in the `package.json` file.

3.  **Set up Environment Variables**
    The image files are currently connected to Cloudinary, be sure all links are there and it's public.

## Running the Application

To start the development server, use the following command:

```bash
npm run dev