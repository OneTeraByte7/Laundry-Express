import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`Login Successful! Role: ${data.role}`);
        // Redirect based on role
        if (data.role === "admin") {
          window.location.href = "/admin-dashboard"; // Redirect to Admin Dashboard
        } else {
          window.location.href = "/user-dashboard"; // Redirect to User Dashboard
        }
      } else {
        alert(data.error || "Login Failed");
      }
    } catch (error) {
      alert("Network Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border mb-2" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border mb-2" required />
        
        <select name="role" onChange={handleChange} className="w-full p-2 border mb-2">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        
        <button type="submit" className="w-full p-2 bg-green-500 text-white hover:bg-green-700">Login</button>
      </form>
    </div>
  );
};

export default Login;
