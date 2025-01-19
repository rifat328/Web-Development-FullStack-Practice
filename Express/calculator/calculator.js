const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
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
