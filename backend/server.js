require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const authRoutes = require("./routes/authRoutes.js");
const bookingRoutes = require("./routes/bookingRoutes");
const app = express();

const PORT = process.env.PORT;

// security headers
app.use(helmet());

// cors
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://car-rental-platform-uy53.vercel.app/",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Car Rental API is running",
  });
});

// app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Serve is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server connection failed:", error);
  }
};

startServer();
