import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminLaundryRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/laundry-requests")
      .then((response) => setRequests(response.data))
      .catch((error) => console.error("Error fetching requests:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Laundry Requests</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">User</th>
            <th className="border p-2">Service</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Location</th> {/* New column for map */}
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id} className="border">
              <td className="p-2">{request.user}</td>
              <td className="p-2">{request.service}</td>
              <td className="p-2">{request.address}</td>
              <td className="p-2">{request.status}</td>
              <td className="p-2">
                {request.latitude && request.longitude ? (
                  <a
                    href={`https://www.google.com/maps?q=${request.latitude},${request.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View on Map
                  </a>
                ) : (
                  <span className="text-gray-500">No Location</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLaundryRequests;
