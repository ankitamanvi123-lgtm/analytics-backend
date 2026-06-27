import express from "express";

const router = express.Router();

// Fake analytics data (later MongoDB)
router.get("/stats", (req, res) => {
  res.json({
    users: [
      { month: "Jan", count: 120 },
      { month: "Feb", count: 180 },
      { month: "Mar", count: 250 },
      { month: "Apr", count: 320 },
      { month: "May", count: 410 },
      { month: "Jun", count: 520 }
    ],

    revenue: [
      { month: "Jan", amount: 20000 },
      { month: "Feb", amount: 25000 },
      { month: "Mar", amount: 30000 },
      { month: "Apr", amount: 45000 },
      { month: "May", amount: 55000 },
      { month: "Jun", amount: 70000 }
    ],

    reports: [
      { type: "Sales", value: 40 },
      { type: "Marketing", value: 25 },
      { type: "Finance", value: 20 },
      { type: "Ops", value: 15 }
    ]
  });
});

export default router;