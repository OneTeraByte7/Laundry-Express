import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user" // Default to user
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("📤 Sending Data:", formData); // Debugging
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(`Signup Successful! Role: ${data.role}`);
      } else {
        alert(data.error || "Signup Failed");
      }
    } catch (error) {
      alert("Network Error");
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input name="name" type="text" placeholder="Name" onChange={handleChange} className="w-full p-2 border mb-2" required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border mb-2" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border mb-2" required />
        
        {/* Role Selection */}
        <select name="role" onChange={handleChange} className="w-full p-2 border mb-2">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white hover:bg-blue-700">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
