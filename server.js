import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const express = require("express");
const app = express();

app.use(express.json());
import authRoutes from "./routes/authRoutes.js";

app.use("/api/auth", authRoutes);
import dashboardRoutes from "./routes/dashboard.js";

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Analytics Backend Running 🚀",
  });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});