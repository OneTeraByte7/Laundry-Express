import { useEffect, useState } from "react";
import axios from "axios";
import AdminLaundryRequests from "./AdminLaundryRequests"; // Admin Requests Component
import PaidPayments from "./PaidPayments"; // Import PaidPayments Component

const AdminDashboard = () => {
  const [liveOrders, setLiveOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("liveOrders"); // Toggle Tabs

  useEffect(() => {
    fetchLiveOrders();
    fetchPastOrders();
  }, []);

  // Fetch live (ongoing) orders
  const fetchLiveOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/laundry-requests");
      setLiveOrders(response.data);
    } catch (error) {
      console.error("Error fetching live orders:", error);
    }
  };

  // Fetch past (completed) orders
  const fetchPastOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/past-orders");
      setPastOrders(response.data);
    } catch (error) {
      console.error("Error fetching past orders:", error);
    }
  };

  // Update order status
  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/update-status/${id}`, { status });
    fetchLiveOrders(); // Refresh orders after update
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          <li
            className={`cursor-pointer p-3 rounded-lg ${activeTab === "liveOrders" ? "bg-gray-600" : "hover:bg-gray-700"}`}
            onClick={() => setActiveTab("liveOrders")}
          >
            Live Orders
          </li>
          <li
            className={`cursor-pointer p-3 rounded-lg mt-2 ${activeTab === "pastOrders" ? "bg-gray-600" : "hover:bg-gray-700"}`}
            onClick={() => setActiveTab("pastOrders")}
          >
            Past Orders
          </li>
          <li
            className={`cursor-pointer p-3 rounded-lg mt-2 ${activeTab === "allRequests" ? "bg-gray-600" : "hover:bg-gray-700"}`}
            onClick={() => setActiveTab("allRequests")}
          >
            All Requests
          </li>
          <li
            className={`cursor-pointer p-3 rounded-lg mt-2 ${activeTab === "paidPayments" ? "bg-gray-600" : "hover:bg-gray-700"}`}
            onClick={() => setActiveTab("paidPayments")}
          >
            Paid Payments
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeTab === "liveOrders" ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Live Orders</h2>
            <ul>
              {liveOrders.map((order) => (
                <li key={order._id} className="mb-4 p-4 border rounded shadow">
                  <p><strong>User:</strong> {order.user}</p>
                  <p><strong>Service:</strong> {order.service}</p>
                  <p><strong>Status:</strong> {order.status}</p>

                  {/* View on Map (Only if Location Exists) */}
                  {order.latitude && order.longitude ? (
                    <a
                      href={`https://www.google.com/maps?q=${order.latitude},${order.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View on Map
                    </a>
                  ) : (
                    <span className="text-gray-500 block mt-2">No Location</span>
                  )}

                  {/* Status Update Buttons */}
                  <div className="mt-2">
                    <button
                      onClick={() => updateStatus(order._id, "Accepted")}
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => updateStatus(order._id, "Processing")}
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Processing
                    </button>
                    <button
                      onClick={() => updateStatus(order._id, "On the Way")}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      On the Way
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : activeTab === "pastOrders" ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Past Orders</h2>
            <ul>
              {pastOrders.map((order) => (
                <li key={order._id} className="mb-4 p-4 border rounded shadow bg-gray-200">
                  <p><strong>User:</strong> {order.user}</p>
                  <p><strong>Service:</strong> {order.service}</p>
                  <p><strong>Status:</strong> {order.status}</p>
                  <p><strong>Completed On:</strong> {new Date(order.completedAt).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : activeTab === "paidPayments" ? (
          <PaidPayments />
        ) : (
          <AdminLaundryRequests />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
