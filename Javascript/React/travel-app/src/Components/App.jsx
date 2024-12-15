import { useState } from "react";
import React from "react";
import "../App.css";
import Header from "./Header";
import Entry from "./Entry";
import data from "../data.js";

const journalEntry = data.map((journal) => (
  <Entry
    key={journal.id}
    //passing object to make it less clatter & configure the rest on component to match
    entry={journal}
    // one other way of doing it with the spread operator
    // {...journal}
    // this will create each prop as the info feeded to it
  />
));
const App = () => {
  return (
    <div>
      <Header />
      <main className="container">{journalEntry}</main>
    </div>
  );
};

export default App;
