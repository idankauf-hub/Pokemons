# Pokemon Full-Stack Application

[![Live Demo](https://img.shields.io/badge/Live-Vercel-blue)](https://pokemons-xi-gray.vercel.app/)

## Overview

This full‑stack application allows users to browse, search, and manage a list of Pokemon. The application fetches Pokemon data from the PokeAPI using a paginated, infinite scroll approach and allows users to view detailed Pokemon information (abilities, types, evolutions) and manage their favorites. Favorites are managed via a Node.js backend that proxies requests to the PokeAPI and persists favorites using MongoDB.

## Features

### Frontend
- **Paginated & Infinite Scrolling List**  
  The frontend fetches Pokemon data page by page. As users scroll, additional pages are loaded dynamically.
- **Pokemon Details Modal**  
  Clicking on a Pokemon opens a modal displaying its abilities, types, and available evolution options.
- **Favorites Management**  
  Users can add or remove Pokemon from their favorites list. Favorite Pokemon are highlighted in the UI.
- **Search & Filter**  
  A search input and a toggle filter allow users to quickly filter Pokemon by name and display only favorites.

### Backend
- **API Proxy with Data Enrichment**  
  The Node.js backend, built with Express and TypeScript, serves as a proxy to the PokeAPI. The endpoint for fetching Pokemon (`GET /`) not only returns paginated data but also retrieves the current favorites from MongoDB and enriches each Pokemon with an `isFavorite` property.
- **Favorites Management API**  
  The backend exposes the following routes:
  - `GET /` - Retrieves paginated Pokemon data enriched with favorite status.
  - `GET /:name` - Retrieves detailed information for a specific Pokemon.
  - `POST /` - Adds a Pokemon to the favorites list.
  - `DELETE /:name` - Removes a Pokemon from the favorites list.
- **Persistence**  
  Favorite Pokemon are stored in MongoDB, ensuring that favorite selections persist between sessions.

## Tech Stack

### Frontend:
- React with TypeScript
- Vite for bundling and fast development
- Redux Toolkit (RTK Query) for efficient data fetching and state management
- Material UI (MUI) for UI components
- Styled-components for styling

### Backend:
- Node.js with Express and TypeScript
- MongoDB for favorites persistence (MongoDB Atlas)
- Axios for HTTP requests to the PokeAPI

### Deployment:
- **Frontend deployed on Vercel**: [Live App](https://pokemons-xi-gray.vercel.app/)
- **Backend deployed on Render**

## Project Structure

```
.
├── front/              
│   ├── src/
│   ├── public/
│   └── package.json
├── server/              
│   ├── src/
│   │   ├── controllers/
│   │   │   └── pokemonController.ts  
│   │   ├── models/
│   │   │   └── Pokemon.ts
│   │   ├── routes/
│   │   │   └── pokemonRoutes.ts       
│   │   ├── repositories/
│   │   │   └── pokemonRepository.ts
│   │   ├── services/
│   │   │   └── pokemonService.ts      
│   │   └── index.ts
│   ├── dist/            
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Local Setup

### Prerequisites
- Node.js (version 14 or later)
- MongoDB (or a MongoDB Atlas connection string)
- Git

### Frontend (Vite/React)
1. Navigate to the `front` directory:
   ```sh
   cd front
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and set your API endpoint:
   ```sh
   VITE_BASE_API_URL=http://localhost:5050/api/
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

### Backend (Node.js/Express)
1. Navigate to the `server` directory:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```sh
   PORT=5050
   MONGO_URI=your_mongodb_connection_string
   ```
4. Build the project:
   ```sh
   npm run build
   ```
5. Start the server:
   ```sh
   npm run start
   ```
6. For development, use:
   ```sh
   npm run dev
   ```
   (This command uses `nodemon` with `ts-node` for hot reloading.)

## How It Works

### Pagination & Infinite Scroll
- **Paginated Data Fetching**: The backend's `GET /` route accepts `limit` and `offset` query parameters to fetch a page of Pokemon from the PokeAPI.
- **Data Enrichment**: The backend fetches the paginated data and retrieves the list of favorite Pokemon from MongoDB, adding an `isFavorite` flag to each Pokemon.
- **Infinite Scroll**: The frontend uses infinite scrolling to load additional pages dynamically.

### Favorites Management
- **Toggle Favorite**: Users can mark/unmark Pokemon as favorites.
  - `POST /` adds a Pokemon to favorites.
  - `DELETE /:name` removes a Pokemon from favorites.
- **Persistence**: Favorites are stored in MongoDB.

## Deployment

### Backend Deployment on Render
- **Build Command:**
  ```sh
  npm install && npm run build
  ```
- **Start Command:**
  ```sh
  npm run start
  ```
- **Environment Variables:** Set `MONGO_URI` and `PORT` in Render’s dashboard.
- **IP Whitelisting:** Add Render's static outbound IP addresses to MongoDB Atlas.

### Frontend Deployment on Vercel
- **Root Directory:** Set the Vercel root directory to the `front` folder.
- **Environment Variables:**
  ```sh
  VITE_BASE_API_URL=https://your-backend.onrender.com/api/
  ```
- **Build:** Vercel will build your project using Vite.
- **Live URL:** [Live Demo](https://pokemons-xi-gray.vercel.app/)

## Future Improvements
- Enhanced error handling.
- Performance optimizations (lazy loading, caching).
- More detailed Pokemon data, animations, and UI enhancements.

