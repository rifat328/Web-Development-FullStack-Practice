import React from "react";

const Exercise1 = () => {
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);

  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings((prevFevthings) => [
      ...prevFevthings,
      allFavoriteThings[prevFevthings.length],
    ]);
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section
        aria-live="polite"
        style={{ color: "red", display: "flex", flexWrap: "wrap" }}
      >
        {thingsElements}
      </section>
    </main>
  );
};

export default Exercise1;
