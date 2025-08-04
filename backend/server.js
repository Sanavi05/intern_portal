import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Dummy data
const userData = {
  name: "Sanavi Kulkarni",
  referralCode: "sanavi2025",
  totalDonations: 1200,
  rewards: ["Bronze Badge", "T-shirt", "Certificate"],
};

const leaderboardData = [
  { name: "Sanavi", donations: 1500 },
  { name: "Shridhar", donations: 1200 },
  { name: "Anita", donations: 1000 },
];

// Routes
app.get("/api/user", (req, res) => {
  res.json(userData);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboardData);
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
