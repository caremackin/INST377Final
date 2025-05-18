const express = require("express");
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://nictrcypbcbbcvugaxog.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pY3RyY3lwYmNiYmN2dWdheG9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1OTYxMDEsImV4cCI6MjA2MzE3MjEwMX0.7o4Vj7dIJVI8s0pNPG0CANj72pDOE34q9KFGGgJbQuE"
);

router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("houses").select();
  if (error) return res.status(500).json({ error });
  res.json(data);
});

router.post("/add", async (req, res) => {
  const { type, bedrooms, bathrooms, address, img_src } = req.body;

  const { data, error } = await supabase
    .from("houses")
    .insert([{ type, bedrooms, bathrooms, address, img_src }]);

  if (error) return res.status(500).json({ error });

  res.status(200).json({ message: "House added successfully", data });
});

module.exports = router;
