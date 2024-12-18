import React from "react";

const ToggleState = () => {
  const [isGoingOut, setIsGoingOut] = React.useState(true);
  const toggle = () => setIsGoingOut((prevValue) => !prevValue);
  return (
    <div>
      <h2>ToggleState</h2>
      <h2>{isGoingOut ? "Yes" : "No"}</h2>
      <button onClick={toggle}>Click To Flip</button>
    </div>
  );
};

export default ToggleState;
