import { useState } from 'react';
import Counter from './Counter';
import UserProfile from './UserProfile';
import WindowSize from './WindowSize';
import ThemeToggle from './ThemeToggle';

function UseEffectDemo() {
    const [userId, setUserId] = useState(1);

    return (
        <div>
            <h1>Task 17.1: useEffect</h1>

            <h2>Exercise 1: Counter</h2>
            <Counter />

            <h2>Exercise 2, Pattern 1: Fetch on mount</h2>
            <button onClick={() => setUserId(1)}>User 1</button>
            <button onClick={() => setUserId(2)}>User 2</button>
            <button onClick={() => setUserId(999)}>User 999 (error)</button>
            <UserProfile userId={userId} />

            <h2>Pattern 2: Event listener</h2>
            <WindowSize />

            <h2>Pattern 3: localStorage sync</h2>
            <ThemeToggle />
        </div>
    );
}

export default UseEffectDemo;