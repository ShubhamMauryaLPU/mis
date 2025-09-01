require("dotenv").config({});

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("welcome to home page");
});
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

app.listen(PORT, () => {
  main()
    .then(() => {
      console.log("database connected");
    })
    .catch((e) => {
      console.log(e);
    });
  console.log(`server is listening at port ${PORT}`);
});
