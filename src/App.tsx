import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Tours from "./components/pages/Tours";
import Cruises from "./components/pages/Cruises";
import TourDetail from "./components/pages/TourDetail";
import BookingDetail from "./components/pages/BookingDetail";
import AboutUs from "./components/pages/AboutUs";
import Blog from "./components/pages/Blog";


// ✅ new import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/cruises" element={<Cruises />} />
        <Route path="/tour-detail/:id" element={<TourDetail />} />
        <Route path="/booking-detail" element={<BookingDetail />} />
            <Route path="/about" element={<AboutUs />} /> {/* new route */}
            <Route path="/blog" element={<Blog />} /> {/* new route */}
        {/* Tour detail routes */}

      </Routes>
    </Router>
  );
}

export default App;
