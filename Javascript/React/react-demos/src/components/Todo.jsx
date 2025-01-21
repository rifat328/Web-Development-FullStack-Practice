import React from "react";

const Todo = () => {
  const [input, setInput] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const addValues = (ev) => {
    setInput(ev.target.value);
  };
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div>
      <input type="text" onChange={addValues} />
      <button onClick={addTask}>Add Task</button>

      {tasks && (
        <div>
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                onClick={() => toggleComplete(index)}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {task.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Todo;
