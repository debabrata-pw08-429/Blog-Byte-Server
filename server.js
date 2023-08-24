// IMPORTs_
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRouter = require("./routes/auth.route");
const blogRouter = require("./routes/blogpost.route");
const cookieParser = require("cookie-parser");
const app = express();
const sequelize = require("./config/connection");

// USE_
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use(authRouter);
app.use(blogRouter);

// LOGIC_
app.get("/", async (req, res) => {
  res.send("Server Working at 8080");
});

// LISTEN_
const port = 8080;
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("---------------------------");
    console.log("Listening to port : " + port);
    console.log("---------------------------");
  });
});
