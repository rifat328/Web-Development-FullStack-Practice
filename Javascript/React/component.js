import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);

// Component makes the code more modular and
// readable
// 1. create a seperate file with the neme Extension Jsx
//   and file name shouild be as component name;
// 2. import react from "react";
// 3. create a function witch pascle-case name
// 4. inside, return html Element and content
// 5. then export function name as
//     export default Heading; <= without () so they don't
//     emmidiately execute ;

//     finally import thes  as import Heading from "./Heading";
//     on your main file. then use this name as tag inside
//     dom render

// import Heading from "./Heading";
// import List from "./List";
// ReactDOM.render(
//   <div>
//     <Heading />
//     <List />
//   </div>,
//   document.getElementById("root")
// );
