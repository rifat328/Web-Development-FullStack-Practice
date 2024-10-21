//! have jsx component file seperated ,file structure 
// should look like this 
// src=>
//     =>component
//         => Heading .jsx  export to App .jsx
//         =>App .jsx import heading.jsx and export to index.js
//     index .js will import App .jsx and render those using relative path ;



import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";

ReactDOM.render(<App />, document.getElementById("root"));
