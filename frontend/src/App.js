import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import BookLaundry from "./components/BookLaundry";
import PaymentHistory from "./components/PaymentHistory"; // Added PaymentHistory component

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar stays fixed at the top */}
      <div className="pt-20"> {/* Pushes content below the navbar */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* User Dashboard with Nested Routes */}
          <Route path="/user-dashboard/*" element={<UserDashboard />} />
          
          {/* Admin Dashboard */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
