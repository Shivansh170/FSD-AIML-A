const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.status(400).json({
    success: true,
    message: "Hello I am the hompage",
  });
  console.log("Hello I am the homepage for this app!");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
