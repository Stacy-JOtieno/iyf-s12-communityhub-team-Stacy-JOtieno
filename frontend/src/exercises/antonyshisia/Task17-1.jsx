// Task 17.1: useEffect Hook
// frontend/src/exercises/antonyshisia/

import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect ran! Count is:", count);
    });

    useEffect(() => {
        console.log("Component mounted!");
    }, []);

    useEffect(() => {
        console.log("Count changed to:", count);
        document.title = `Count: ${count}`;
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Tick");
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("Cleaned up!");
        };
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button type="button" onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            setLoading(true);
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`
            );
            const data = await response.json();
            setUser(data);
            setLoading(false);
        }

        fetchUser();
    }, [userId]);

    if (loading) return <p>Loading...</p>;
    return <div>{user?.name}</div>;
}

function WindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <p>
            Window: {size.width} x {size.height}
        </p>
    );
}

function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            Toggle Theme ({theme})
        </button>
    );
}

function Task17_1() {
    return (
        <div>
            <h1>Task 17.1: useEffect Hook</h1>
            <Counter />
            <UserProfile userId={1} />
            <WindowSize />
            <ThemeToggle />
        </div>
    );
}

export default Task17_1;
