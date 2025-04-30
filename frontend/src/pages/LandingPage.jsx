import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to Laundry & Delivery</h1>
      <p className="mt-4 text-lg">Fast and Reliable Laundry Service</p>
      <div className="mt-6 flex space-x-4">
        <Link to="/login" className="bg-white text-blue-900 px-6 py-2 rounded-md">Login</Link>
        <Link to="/signup" className="bg-blue-500 px-6 py-2 rounded-md">Sign Up</Link>
      </div>
    </div>
  );
}
