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
    `<h2> I am a Software Engineer  need Any Help ?  contact me at @rifathossain328 </h2>`
  );
});
app.listen(port, () => {
  console.log(`Example App Listening on Port ${port}`);
});

const add = (num1, num2) => {
  return num1 + num2;
};
const subtract = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const devide = (num1, num2) => num1 / num2;

const calculator = (logic, number1, number2) => {
  return logic(number1, number2);
};

app.get("/calculator", (req, res) => {
  let val = calculator(multiplication, 2, 3);
  //   console.log(val);
  res.send(`${val}`);
});
