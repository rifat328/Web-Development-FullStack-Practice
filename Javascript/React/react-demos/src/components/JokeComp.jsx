
import Joke from "./Joke";
import jokesData from "./jokesData";

export default function App() {
  /**
   * Challenge: See if you can correctly pass the necessary props to the
   * Joke component in the .map() (and render the jokeElements array) so
   * the jokes show up on the page again
   */

  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return <main>{jokeElements}</main>;
}

export default function Joke(props) {
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p>
            <hr />
        </>
    )
}

// export default [
//     {
//         setup: "I got my daughter a fridge for her birthday.",
//         punchline: "I can't wait to see her face light up when she opens it."
//     },
//     {
//         setup: "How did the hacker escape the police?",
//         punchline: "He just ransomware!"
//     },
//     {
//         setup: "Why don't pirates travel on mountain roads?",
//         punchline: "Scurvy."
//     },
//     {
//         setup: "Why do bees stay in the hive in the winter?",
//         punchline: "Swarm."
//     },
//     {
//         setup: "What's the best thing about Switzerland?",
//         punchline: "I don't know, but the flag is a big plus!"
//     }
// ]