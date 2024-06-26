const express = require("express");
const app = express();
const cors = require("cors")


app.use(express.json());
app.use(cors());
const db = require("./models");

/// Routers


const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize
  .sync()
  .then(() => { 
    console.log("Database synced successfully.");
  })
  .catch((err) => {
    console.error("Database sync error:", err);
    process.exit(1); // Exit the process if there's a sync error
  });

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
