// Task 16.1: useState Hook
// frontend/src/exercises/antonyshisia/

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <p>The toggle is {isOn ? "ON" : "OFF"}</p>
            <button onClick={() => setIsOn(!isOn)}>
                Toggle
            </button>
        </div>
    );
}

function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    return (
        <form>
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
        </form>
    );
}

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
