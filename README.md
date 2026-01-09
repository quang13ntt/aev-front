# AEV Cinema Booking App

A modern React-based web application for browsing cinema showtimes and booking theater seats. Built with a focus on modularity, reusability, and user-friendly interfaces.

## Features

- **Cinema Showtimes**: Browse movies with showtime schedules across different dates
- **Seat Booking**: Interactive seat selection with real-time availability
- **Responsive Design**: Optimized for desktop and mobile devices
- **Navigation**: Seamless routing between home, cinema listings, and booking pages
- **Modular Components**: Reusable React components for easy maintenance and scalability

## Installation

Install dependencies:

```bash
npm install
```

## Usage

To run the application locally:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

### Navigation

- **Home Page**: Landing page with navigation buttons
- **Cinema Page**: View movie listings and showtimes
- **Theater Booking Page**: Select seats for a specific movie and showtime

## Project Structure

```tree
src/
├── components/
│   ├── booking/          # Seat booking components
│   │   ├── BookingHeader.jsx
│   │   ├── SeatGrid.jsx
│   │   ├── SeatLegend.jsx
│   │   └── SelectionFooter.jsx
│   ├── cinema/           # Cinema-related components
│   │   ├── DateSelector/
│   │   ├── MovieCard/
│   │   └── TheaterBanner.jsx
│   ├── common/           # Reusable UI components
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── ScrollButton.jsx
│   │   └── Tabs.jsx
│   └── layout/           # Layout components
│       ├── Footer.jsx
│       └── Header/
├── data/                 # Mock data and configurations
│   ├── mockMovies.js
│   └── seatLayout.js
├── pages/                # Main application pages
│   ├── CinemaPage.jsx
│   ├── HomePage.jsx
│   └── TheaterBookingPage.jsx
├── utils/                # Utility functions
│   └── dateHelpers.js
├── App.jsx               # Main app component with routing
├── main.jsx              # Application entry point
└── index.css             # Global styles
```

## Technologies Used

- **React**: Frontend framework with hooks for state management
- **React Router DOM**: Client-side routing
- **Vite**: Fast build tool and development server
- **CSS Modules**: Scoped styling for component isolation
- **Node.js & npm**: Package management and runtime
