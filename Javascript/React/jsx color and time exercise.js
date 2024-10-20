//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
const currentTime = date.getHours();
let greeting;
let styleColor = {
  color: "",
};

if (currentTime < 12) {
  greeting = "Good Morning";
  styleColor.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  styleColor.color = "green";
} else {
  greeting = "Good Night";
  styleColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={styleColor}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

// let styleColor = {
//     color: "black",
//     fontSize: '2rem'
// };

// function timeChecker() {
//     const DateTime = new Date();
//     let currentValue = "";

//     if (DateTime.getHours() >= 0 && DateTime.getHours() < 12) {
//         currentValue = "Good Morning";
//         styleColor.color = "red";
//     } else if (DateTime.getHours() >= 12 && DateTime.getHours() < 18) {
//         currentValue = "Good Afternoon";
//         styleColor.color = "green";
//     } else {
//         currentValue = "Good Evening";
//         styleColor.color = "blue";
//     }
//     return currentValue;
// }

// const currentValue = timeChecker();

// ReactDOM.render(
//     <div>
//         <h1 className="heading" style={styleColor}>{currentValue}</h1>
//     </div>,
//     document.getElementById("root")
// );

// const DateTime = new Date();
// console.log(typeOf(DateTime));
// const hours = DateTime.getHours();
// const minutes = DateTime.getMinutes();
// const seconds = DateTime.getSeconds();
// console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
