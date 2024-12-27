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
  every time it hed to renderd 
  
  Quiz--
    1. In what way are React components meant to be "pure functions"
- Given the same props or state, the component will always return
  the same content, or UI
- Rendering and re-rendering a component will never have any kind
  of side effect on an outside system

  2. What is a "side effect" in React? What are some examples?
- Any code that affects or interacts with an outside system
- local storage, API, websockets, DOM manipulation

    3. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with data, 
  rendering DOM elements

  4. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component renders for the first time
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders

  5. How would you explain what the "dependecies array" is?
- Second parameter to the useEffect function
- A way for React to know whether or not it should re-run the effect function
  
  */
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
