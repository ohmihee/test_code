import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "test" });
});

app.listen(3000, () => {
  console.log("server start 3000");
});
