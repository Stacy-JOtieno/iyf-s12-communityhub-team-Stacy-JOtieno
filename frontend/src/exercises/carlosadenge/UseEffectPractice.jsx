import { useState, useEffect } from "react";

function UseEffectPractice() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran! Count is:", count);
  });

  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    const id = setInterval(() => console.log("Tick"), 1000);
    return () => {
      clearInterval(id);
      console.log("Cleaned up!");
    };
  }, []);

  return (
    <div>
      <h2>useEffect Practice — Carlos Adenge</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>Open the browser console to see the logs.</p>
    </div>
  );
}

export default UseEffectPractice;