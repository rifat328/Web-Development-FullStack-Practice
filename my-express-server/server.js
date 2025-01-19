const express = require("express");
const app = express();
const port = 4000;

// '/' root home directory.
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
  //   console.log(req);
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact me rifathossain328663@gmail.com</h2>");
  //   console.log(req);
});

app.get("/about", (req, res) => {
  res.send(
    ` I am a Software Engineer  need Any Help ?  contact me at @rifathossain328>`
  );
});
app.listen(port, () => {
  console.log(`Example App Listening on Port ${port}`);
});
