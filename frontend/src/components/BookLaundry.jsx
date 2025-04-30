import { useState } from "react";
import axios from "axios";

const BookLaundry = () => {
  const [user, setUser] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [message, setMessage] = useState("");

  // 📌 Handle Booking Request
  const handleBooking = async () => {
    if (!user || !service || !address || !latitude || !longitude) {
      setMessage("Please enter your name, select a service, and provide an address.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/book-laundry", {
        user,
        service,
        address,
        latitude,
        longitude,
      });
  
      console.log("Response Data:", response.data); // ✅ Debug Log
      setMessage(response.data.message);
    } catch (error) {
      console.error("Failed to book laundry:", error);
      setMessage("Failed to book laundry. Try again.");
    }
  };
  
  // 📌 Fetch User's Location
  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setMessage("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

        try {
          const geoResponse = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          setAddress(geoResponse.data.display_name);
        } catch (error) {
          setMessage("Failed to fetch location.");
        }
      },
      () => {
        setMessage("Unable to retrieve your location.");
      }
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Book Laundry Service</h2>

      {/* User Input */}
      <input
        type="text"
        placeholder="Enter Your Name"
        className="border p-2 w-full mb-3"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      {/* Dropdown Menu for Services */}
      <select
        className="border p-2 w-full mb-3"
        value={service}
        onChange={(e) => setService(e.target.value)}
      >
        <option value="">Select a Service</option>
        <option value="Cleaning">Cleaning</option>
        <option value="Pressing">Pressing</option>
        <option value="Dry Cleaning">Dry Cleaning</option>
        <option value="Ironing">Ironing</option>
        <option value="Wash & Fold">Wash & Fold</option>
      </select>

      {/* Address Input */}
      <input
        type="text"
        placeholder="Enter Address"
        className="border p-2 w-full mb-3"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      {/* Use My Location Button */}
      <button
        className="bg-gray-600 text-white px-4 py-2 w-full rounded mb-3"
        onClick={fetchLocation}
      >
        Use My Location
      </button>

      {/* Book Now Button */}
      <button
        className="bg-blue-600 text-white px-4 py-2 w-full rounded"
        onClick={handleBooking}
      >
        Book Now
      </button>

      {/* Message Display */}
      {message && <p className="mt-3 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default BookLaundry;
