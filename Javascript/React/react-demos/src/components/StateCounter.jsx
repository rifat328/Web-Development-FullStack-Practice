import React from "react";
import { useState } from "react";
import "../styles/state-counter.css";
const StateCounter = () => {
  const [count, setCount] = useState(0);
  const incriment = () => setCount(count + 1);
  const decriment = () => setCount((previousValu) => previousValu - 1);
  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button
          className="minus"
          aria-label="Decrease count"
          onClick={decriment}
        >
          –
        </button>
        <h2 className="count">{count}</h2>
        <button
          className="plus"
          aria-label="Increase count"
          onClick={incriment}
        >
          +
        </button>
      </div>
    </main>
  );
};
// let answer = isGoingOut ? "Yes" : "No" //
export default StateCounter;
