import React from "react";

const State = () => {
  let [isImportent, setIsImportent] = React.useState("Maybe");
  const handleClick = () => setIsImportent("Definitely");
  return (
    <div>
      <h1>State management task</h1>
      <h1>{isImportent}</h1>
      <button onClick={handleClick}>State Change</button>
    </div>
  );
};

export default State;
