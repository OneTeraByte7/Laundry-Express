import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/user", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.error("Auth Error:", err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  if (!user) return <p className="text-center text-xl font-semibold mt-10">Loading...</p>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Your Dashboard</h1>
        <p className="mt-4 text-lg">Hello, {user.name}!</p>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="mt-6 bg-red-500 px-6 py-2 rounded-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
