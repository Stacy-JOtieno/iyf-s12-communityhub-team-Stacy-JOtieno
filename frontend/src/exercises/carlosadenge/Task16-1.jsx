import { useState } from "react";

function Task16_1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Carlos");

  return (
    <div>
      <h1>Task 16.1 – useState Hook</h1>

      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <h2>Name Example</h2>
      <p>Hello, {name}!</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
    </div>
  );
}

export default Task16_1;
