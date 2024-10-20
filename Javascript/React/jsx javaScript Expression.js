import React from "react";
import ReactDOM from "react-dom";

const name = "Rifat";
const lastName="Hossain";
const myLuckyNumber = 3;

ReactDOM.render(
  <div>
    <h1>Hello {name  + " " + lastName}!</h1>
    <p>My Lucky Number is {myLuckyNumber}</p>
    <p>My Lucky Random Number is {Math.floor(Math.random() * 10 + 1)}</p>
  </div>,
  document.getElementById("root")
);

// Expression work but Statement dosent work inside jsx html+js from;
// Statement is some sort of work to be done like logic and computetion and work
// they perform action , do actions but dont become values like control statement
// but Expression is some sort of value or resolve to a value
// Expression resolved to a single value , statement doesn't become value or some work to be done insted
