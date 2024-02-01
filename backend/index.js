const express = require("express");
require("./database/config");
const User = require("./database/user");

const app = express();

app.get("/", (req, resp) => {
  resp.send("app started");
});
app.use(express.json());
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();

  resp.send(result);
});

app.listen(5000);
