import React, { useState } from "react";
import axios from "axios";

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [amount, setAmount] = useState("");

  const user = "testuser@example.com"; // ✅ Replace with actual user email from authentication

  const handlePaymentSelection = async (method) => {
    setSelectedPayment(method);

    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/payment", {
        user,
        amount: parseFloat(amount),
        method,
      });

      alert(`Payment of ₹${amount} via ${method} is successful! ✅`);
    } catch (error) {
      alert("Payment failed! ❌");
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">💰 Choose Payment Method</h2>

      <input
        type="number"
        placeholder="Enter Amount (₹)"
        className="border p-3 w-full mb-4 rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => handlePaymentSelection("Cash")} className="bg-green-500 text-white p-3 rounded hover:bg-green-700 transition">
          💵 Cash
        </button>
        <button onClick={() => handlePaymentSelection("UPI")} className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition">
          🔄 UPI
        </button>
        <button onClick={() => handlePaymentSelection("GPay")} className="bg-yellow-500 text-white p-3 rounded hover:bg-yellow-700 transition">
          🏦 GPay
        </button>
        <button onClick={() => handlePaymentSelection("Paytm")} className="bg-purple-500 text-white p-3 rounded hover:bg-purple-700 transition">
          📲 Paytm
        </button>
      </div>

      {selectedPayment && (
        <div className="mt-6 text-lg font-semibold text-gray-700">
          ✅ Payment Method: <span className="text-blue-500">{selectedPayment}</span>
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;
