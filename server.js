const express = require("express");
const path = require("path");

const app = express();

// IMPORTANT for hosting (Render, etc.)
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static("public"));

// Routes
const prayerRoute = require("./routes/prayer");
const quranRoute = require("./routes/quran");

app.use("/prayer", prayerRoute);
app.use("/quran", quranRoute);

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});