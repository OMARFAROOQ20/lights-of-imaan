const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 🌙 Static files (frontend)
app.use(express.static("public"));

// 📿 Routes
const prayerRoute = require("./routes/prayer");
const quranRoute = require("./routes/quran");
const contentRoute = require("./routes/content");

// API endpoints
app.use("/prayer", prayerRoute);
app.use("/quran", quranRoute);
app.use("/content", contentRoute);

// 🌐 Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log("🌙 Lights of Imaan server running on port " + PORT);
});
