import React from "react";
import ReactDOM from "react-dom";

// in this example we passing the object on the style
// also under object each css property is written as camel case insted of CSS
// kabab case , insted of ; we are using , to seperate them bec this is an object
const customStyling = {
  color: "red",
  fontSize: "5rem",
  border: "2rem dashed blue",
};
//we can also change a property on the fly if needed by accessing
// thet object like this :
customStyling.color = "green";
// it will change that proverty value and apply the style

ReactDOM.render(
  <h1 style={customStyling}>Hello World!</h1>,

  document.getElementById("root")
);

// inline style work differently in jsx file
// pass object style as style value
// ReactDOM.render(
//     <h1 style={{ color: "red" }}>Hello World!</h1>,

//     document.getElementById("root")
//   );
