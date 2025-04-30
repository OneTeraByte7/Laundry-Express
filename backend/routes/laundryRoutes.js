const express = require("express");
const router = express.Router();
const LaundryRequest = require("../models/LaundryRequest");

// Handle new laundry requests (POST)
router.post("/api/laundry-requests", async (req, res) => {
  try {
    const { user, service, status, address, latitude, longitude } = req.body; // ✅ Extract location

    const newRequest = new LaundryRequest({
      user,
      service,
      status,
      address,
      latitude, // ✅ Save latitude
      longitude, // ✅ Save longitude
    });

    await newRequest.save();
    res.status(201).json({ message: "Request saved successfully!" });

  } catch (error) {
    console.error("Error saving request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
