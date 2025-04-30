import React, { useEffect, useState } from "react";
import axios from "axios";

const PaidPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/all-payments")
      .then((response) => setPayments(response.data))
      .catch((error) => console.error("Error fetching payments:", error));
  }, []);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Paid Payments (Admin)</h2>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">User</th>
            <th className="p-2 border">Amount (₹)</th>
            <th className="p-2 border">Method</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{payment.user}</td>
              <td className="p-2 border">₹{payment.amount}</td>
              <td className="p-2 border">{payment.method}</td>
              <td className="p-2 border">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaidPayments;
