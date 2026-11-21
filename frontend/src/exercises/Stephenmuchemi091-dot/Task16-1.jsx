
import { useState } from "react";

// Exercise 1: Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Exercise 2: Toggle Component
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>Toggle</h2>
      <p>The toggle is {isOn ? "ON" : "OFF"}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

// Exercise 3: Multiple State Variables
function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <h2>User Form</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Main Task 16.1 Component
function Task16_1() {
  return (
    <div>
      <h1>Task 16.1: useState Hook</h1>
      <Counter />
      <Toggle />
      <UserForm />
    </div>
  );
}

export default Task16_1;
