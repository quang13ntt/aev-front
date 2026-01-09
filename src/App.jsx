import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CinemaPage from './pages/CinemaPage';
import TheaterBookingPage from './pages/TheaterBookingPage';
import TicketPurchasePage from './pages/TicketPurchasePage';
import GiftCardInfoPage from './pages/GiftCardInfoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cinema" element={<CinemaPage />} />
        <Route path="/booking" element={<TheaterBookingPage />} />
        <Route path="/ticket-purchase" element={<TicketPurchasePage />} />
        <Route path="/gift-card" element={<GiftCardInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
