import React from "react";

const UseEffect = () => {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0);

  console.log("Rendered!");

  /**
   * Challenge: re-write the useEffect
   * It should run any time `count` changes
   * For now, just console.log("Effect function ran")
   */
  React.useEffect(() => console.log("Effect function ran"), [count]);
  /*  react compare dependency array value with previous value of that array 
  if that changes then react will run that callBack function inside of the useEffact
  unless it won't this helps us to make api calls safely without infinite api call bec without this react will call api 
  every time it hed to renderd */
  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default UseEffect;
