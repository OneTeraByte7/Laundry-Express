const mongoose = require("mongoose");

const LaundryRequestSchema = new mongoose.Schema({
  user: { type: String, required: true },
  service: { type: String, required: true },
  status: { type: String, default: "Pending" },
  address: { type: String, required: true }, // ✅ Store address
  latitude: { type: Number, required: false }, // ✅ Store latitude
  longitude: { type: Number, required: false }, // ✅ Store longitude
});

module.exports = mongoose.model("LaundryRequest", LaundryRequestSchema);
