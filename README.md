# SmartFlixGPT Movie App

A React web app featuring user authentication, movie browsing, AI-powered movie suggestions, and responsive design built with TailwindCSS and Firebase.

---

## Features

### Authentication
- Login / Sign Up forms with form validation
- User account creation via Firebase Authentication
- Sign In and Sign Out functionality
- User profile update (display name & profile picture)
- Protected routes: redirect to login if unauthenticated and vice versa

### Movie Browsing (After Authentication)
- Responsive Browse page with a header
- Main movie trailer background with title and description
- Multiple movie suggestion lists using TMDB API data
- Custom hooks for fetching "Now Playing" movies and video trailers
- Embedded autoplay, muted YouTube trailers
- TMDB image CDN integration for movie posters and backdrops

### NetflixGPT AI Integration
- GPT-powered search bar for movie recommendations
- Multi-lingual support
- GPT slice for managing AI suggestion data in Redux
- Reusable MovieList components for suggested movies

### State Management & Tools
- Redux store with userSlice and GPT slice
- useRef hook usage for form and UI control
- Environment variables for API keys stored securely via `.env` file
- Hardcoded constants organized in a constants file

### Deployment & Dev Setup
- TailwindCSS configured with Create React App
- Firebase setup for backend authentication and user management
- TMDB API integration with access tokens
- Deployed to production with environment configs
- Proper cleanup with unsubscribe on Firebase auth state changes
- Memoization for performance optimization
- Responsive UI built entirely with TailwindCSS

---

## Getting Started

1. Clone the repo
2. Run `npm install` or `yarn` to install dependencies
3. Configure `.env` with Firebase, TMDB, and Gemini AI keys
4. Run `npm start` or `yarn start` for development
5. Build and deploy to your hosting provider

---

## Technologies Used

- React with Create React App
- TailwindCSS for styling
- Firebase Authentication
- Redux Toolkit for state management
- TMDB API for movie data
- GPT AI integration for recommendations
- React Router for routing

---

**Enjoy exploring movies with AI-powered recommendations!**
