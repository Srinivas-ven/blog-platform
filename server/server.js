const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = require("./config/db");

const User = require("./models/User");
const Post = require("./models/Post");
const Comment = require("./models/Comment");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => {
  res.send("Blog API Running");
});

const PORT = process.env.PORT || 5000;

sequelize.sync()
.then(() => {

  console.log("MySQL Connected");

  app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

  });

})
.catch(err => {

  console.log(err);

});