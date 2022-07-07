const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
require("dotenv").config();
const urlRoutes = require("./routes/urlRoutes");
const userRoutes = require("./routes/userRoutes");

mongoose
  .connect(process.env.DB_CONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database succesfully");
  })
  .catch((err) => {
    console.log(`error connecting to database  ${err}`);
  });

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(urlRoutes);
app.use(userRoutes);
app.use((_, res) => {
  res.redirect(process.env.CLIENT_HOMEPAGE + "/notfound");
});
let port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
