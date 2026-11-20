import { useState, useEffect } from "react";

function UseEffectPractice() {
  const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    console.log("Effect ran! Count is:", count);
  });

  // Runs only on mount
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log("Count changed to:", count);
    document.title = `Count: ${count}`;
  }, [count]);

  // Cleanup example
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
    <div className="useeffect-practice">
      <h2>useEffect Practice — Carlos Adenge</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Open the browser console to see the effect logs.</p>
    </div>
  );
}

export default UseEffectPractice;