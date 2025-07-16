import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await db`SELECT NOW()`;
    res.json({ success: true, now: result[0].now });
  } catch (err) {
    console.error("❌ DB Test Error:", err);
    res.status(500).json({ success: false, error: "Database test failed" });
  }
});

export default router;