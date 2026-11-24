import { useEffect, useState } from "react";

function Day1Timer() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) {
            return undefined;
        }

        const interval = setInterval(() => {
            setSeconds((value) => value + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [running]);

    function reset() {
        setRunning(false);
        setSeconds(0);
    }

    return (
        <section>
            <h1>Day 1: Timer</h1>
            <p>Elapsed: {seconds} {seconds === 1 ? "second" : "seconds"}</p>
            <button type="button" onClick={() => setRunning(true)}>Start</button>
            <button type="button" onClick={() => setRunning(false)}>Stop</button>
            <button type="button" onClick={reset}>Reset</button>
        </section>
    );
}

export default Day1Timer;
