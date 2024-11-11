import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready 123");
});

app.listen(5000, () => {
  console.log("Sever started at http://localhost:5000");
});