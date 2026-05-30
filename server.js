const express = require("express");
const router = express.Router();

// 🌙 Islamic Data (you can expand later)
const duas = [
  "O Allah, guide us to the straight path.",
  "O Allah, forgive our sins.",
  "O Allah, grant us peace in heart.",
  "O Allah, increase us in knowledge."
];

const ayahs = [
  "Indeed, with hardship comes ease. (94:6)",
  "So remember Me; I will remember you. (2:152)",
  "Do not lose hope in the mercy of Allah. (39:53)",
  "Verily, Allah is with the patient. (2:153)"
];

const quotes = [
  "Prayer is the key to peace.",
  "A believer is never alone.",
  "Faith makes everything possible.",
  "Trust Allah’s timing."
];

const wallpapers = [
  "https://images.unsplash.com/photo-1542816417-0983c9c9ad53",
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  "https://images.unsplash.com/photo-1548013146-72479768bada",
  "https://images.unsplash.com/photo-1519817914152-22d216bb9170"
];

// 🔥 Daily rotating logic
function getTodayIndex(arrLength) {
  const today = new Date().getDate(); // day of month
  return today % arrLength;
}

// 📿 API route
router.get("/", (req, res) => {
  res.json({
    dua: duas[getTodayIndex(duas.length)],
    ayah: ayahs[getTodayIndex(ayahs.length)],
    quote: quotes[getTodayIndex(quotes.length)],
    wallpaper: wallpapers[getTodayIndex(wallpapers.length)]
  });
});

module.exports = router;
