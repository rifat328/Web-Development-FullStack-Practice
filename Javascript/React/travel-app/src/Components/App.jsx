import { useState } from "react";
import React from "react";
import "../App.css";
import Header from "./Header";
import Entry from "./Entry";
import data from "../data.js";

const journalEntry = data.map((journal) => (
  <Entry
    id={journal.id}
    img={journal.img}
    title={journal.title}
    country={journal.country}
    googleMapsLink={journal.googleMapsLink}
    dates={journal.dates}
    text={journal.text}
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
