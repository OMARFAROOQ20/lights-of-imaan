const express = require("express");
const axios = require("axios");

const router = express.Router();

// Prayer times API
router.get("/", async (req, res) => {
  try {
    // Nellore coordinates (approx)
    const lat = 14.4426;
    const lon = 79.9865;

    const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`;

    const response = await axios.get(url);

    res.json(response.data.data.timings);
  } catch (error) {
    res.status(500).send("Error fetching prayer times");
  }
});

module.exports = router;