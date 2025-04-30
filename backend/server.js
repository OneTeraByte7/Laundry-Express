const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

// ✅ CORS Setup
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT",
  credentials: true,
};
app.use(cors(corsOptions));

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/laundrydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ User Schema & Model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["user", "admin"], required: true, default: "user" },
});
const User = mongoose.model("User", UserSchema);

// ✅ Laundry Booking Schema & Model
const LaundrySchema = new mongoose.Schema({
  user: { type: String, required: true },
  service: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], index: "2dsphere" },
  },
  date: { type: String, default: new Date().toISOString().split("T")[0] },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Processing", "On the way", "Completed"],
    default: "Pending",
  },
  completedAt: Date,
});
const Laundry = mongoose.model("Laundry", LaundrySchema);

// ✅ Payment Schema & Model
const PaymentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  amount: { type: Number, required: true },
  method: { type: String, required: true },
  date: { type: String, default: new Date().toISOString().split("T")[0] },
});
const Payment = mongoose.model("Payment", PaymentSchema);

// ✅ Signup Route
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully", role });
  } catch (error) {
    res.status(500).json({ error: "Signup failed", details: error.message });
  }
});

// ✅ Login Route
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Incorrect password" });

    res.status(200).json({ message: "Login successful", role: user.role });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

// ✅ Book Laundry Route
app.post("/api/book-laundry", async (req, res) => {
  try {
    console.log("📌 Incoming Booking Data:", req.body);

    const { user, service, address, latitude, longitude } = req.body;

    if (!user || !service || !address) {
      return res.status(400).json({ error: "User, service, and address are required." });
    }

    let location = null;
    if (latitude !== undefined && longitude !== undefined) {
      location = {
        type: "Point",
        coordinates: [longitude, latitude],
      };
    }

    const newRequest = new Laundry({
      user,
      service,
      address,
      location,
    });

    await newRequest.save();
    res.status(201).json({ message: "Laundry request submitted successfully!" });
  } catch (error) {
    console.error("❌ Error Storing Laundry Request:", error);
    res.status(500).json({ error: "Error booking laundry", details: error.message });
  }
});

// ✅ Fetch All Laundry Requests (Admin)
app.get("/api/laundry-requests", async (req, res) => {
  try {
    const requests = await Laundry.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch requests" });
  }
});

// ✅ Fetch Live Orders (Ongoing Orders)
app.get("/api/live-orders", async (req, res) => {
  try {
    const liveOrders = await Laundry.find({ status: { $ne: "Completed" } });
    res.json(liveOrders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching live orders", error });
  }
});

// ✅ Fetch Past Orders (Completed Orders)
app.get("/api/past-orders", async (req, res) => {
  try {
    const pastOrders = await Laundry.find({ status: "Completed" });
    res.json(pastOrders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching past orders", error });
  }
});

// ✅ Update Laundry Status (For Admins)
app.put("/api/update-status/:id", async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    let updateFields = { status };
    if (status === "Completed") {
      updateFields.completedAt = new Date();
    }

    await Laundry.findByIdAndUpdate(req.params.id, updateFields);
    res.json({ message: "Status updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update status" });
  }
});

// ✅ Route to Store Payment in Database
app.post("/api/payment", async (req, res) => {
  try {
    const { user, amount, method } = req.body;
    if (!user || !amount || !method) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newPayment = new Payment({ user, amount, method });
    await newPayment.save();

    res.status(201).json({ message: "Payment successful!" });
  } catch (error) {
    res.status(500).json({ error: "Payment failed", details: error.message });
  }
});

// ✅ Route to Fetch User Payment History
app.get("/api/user-payments/:user", async (req, res) => {
  try {
    const userPayments = await Payment.find({ user: req.params.user });
    res.json(userPayments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch payments" });
  }
});

// ✅ Route to Fetch All Payments for Admin
app.get("/api/all-payments", async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch all payments" });
  }
});

// ✅ Start Server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
