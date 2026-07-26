# swiggy
# Swiggy Clone Project Explanation
Project Title

Swiggy Clone (React + Node.js + Express)

Project Overview

This project is a Swiggy-inspired food delivery web application. It allows users to browse food categories, view restaurants, and explore food items. The frontend is built with React, while the backend is developed using Node.js and Express. The backend serves restaurant and category data through REST APIs, and the frontend consumes these APIs to display dynamic content.

Technologies Used
Frontend
React.js
JavaScript (ES6)
HTML5
CSS3
React Hooks (useState, useEffect)
Backend
Node.js
Express.js
CORS
Tools
Git & GitHub
Render (Backend Deployment)
Render Static Site / Vercel (Frontend Deployment)
Project Architecture
React Frontend
       │
       │ Fetch API
       ▼
Node.js + Express Backend
       │
       ▼
JSON Data (Categories & Restaurants)

The React application sends HTTP requests to the Express server, and the server returns JSON data that is displayed in the UI.

Features
Food category listing
Restaurant listing
Restaurant cards with images
Dynamic data loading using Fetch API
Responsive UI
REST API integration
Backend deployment on Render
Frontend deployment on Render/Vercel
Frontend

The frontend is developed using React.

Main responsibilities:

Display categories
Display restaurant cards
Fetch API data
Render images
Responsive layout

React components include:

Header
Category
Top Restaurants
Online Delivery
Restaurant Card
Backend

The backend is built with Express.js.

It provides APIs such as:

GET /categories
GET /top-restaurant-chains
GET /api/food
GET /images/:imageName

The server reads JSON data and returns it to the frontend.

API Flow
User opens the application.
React calls the backend API.
Express receives the request.
Server returns JSON data.
React updates the UI with categories and restaurants.
Deployment
Backend
Hosted on Render
APIs are accessible through the Render URL.
Frontend
Hosted on Render Static Site (or Vercel)
API URLs were updated from:
http://localhost:5001

to the deployed backend URL.

Challenges Faced
Git submodule issue because frontend and backend had separate .git folders.
Updating localhost API URLs after deployment.
Configuring CORS between frontend and backend.
Deploying frontend and backend separately.
Outcome

The project successfully demonstrates:

Full-stack development
React component-based UI
REST API integration
Express backend development
Git & GitHub version control
Cloud deployment using Render
Interview Summary (30–45 seconds)

"I developed a Swiggy Clone using React for the frontend and Node.js with Express for the backend. The frontend fetches restaurant and category data from REST APIs provided by the backend and displays it dynamically using React components. The backend serves JSON data and images through Express routes. I used Git and GitHub for version control and deployed the backend and frontend on Render. During development, I resolved issues related to Git submodules, API URL updates, CORS configuration, and deployment."
