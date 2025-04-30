import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-blue-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">LaundryExpress</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-yellow-400 transition">Features</Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-yellow-400 transition">Pricing</Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:text-yellow-400 transition">Testimonials</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          </li>
        </ul>
        <div>
          <Link to="/login" className="px-4 py-2 bg-white text-blue-800 font-bold rounded-md hover:bg-gray-200 transition">
            Login
          </Link>
          <Link to="/signup" className="ml-4 px-4 py-2 bg-yellow-400 text-blue-800 font-bold rounded-md hover:bg-yellow-500 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
