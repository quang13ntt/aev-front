import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CinemaPage from './pages/CinemaPage';
import TheaterBookingPage from './pages/TheaterBookingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cinema" element={<CinemaPage />} />
        <Route path="/booking" element={<TheaterBookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
