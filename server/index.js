const express = require("express");
const app = express();
const cors = require("cors");
const supabaseRoutes = require("./supabase");

app.use(cors());
app.use(express.json());
app.use("/supabase", supabaseRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
