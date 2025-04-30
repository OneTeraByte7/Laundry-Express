import { Routes, Route, Link } from "react-router-dom";
import BookLaundry from "../components/BookLaundry";
import PaymentHistory from "../components/PaymentHistory";
import PaymentOptions from "../components/PaymentOptions"; // ✅ NEW COMPONENT

const UserDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">LaundryExpress</h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="/user-dashboard/book-laundry"
              className="block p-3 rounded hover:bg-blue-500 transition"
            >
              📌 Book Laundry
            </Link>
          </li>
          <li>
            <Link
              to="/user-dashboard/payment-history"
              className="block p-3 rounded hover:bg-blue-500 transition"
            >
              💳 Payment History
            </Link>
          </li>
          <li>
            <Link
              to="/user-dashboard/payment-options"
              className="block p-3 rounded hover:bg-blue-500 transition"
            >
              💰 Payment Options
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-10 bg-gray-100">
        <Routes>
          <Route path="book-laundry" element={<BookLaundry />} />
          <Route path="payment-history" element={<PaymentHistory />} />
          <Route path="payment-options" element={<PaymentOptions />} /> {/* ✅ NEW */}
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;
