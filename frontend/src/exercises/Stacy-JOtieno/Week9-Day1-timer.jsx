
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(interval);
    };

  }, [isRunning]);

  function resetTimer() {
    setIsRunning(false);
    setSeconds(0);
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">
        Timer
      </h1>

      <p className="text-5xl font-bold mb-6">
        {seconds} seconds
      </p>

      <div className="flex justify-center gap-3">

        <button
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Start
        </button>

        <button
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Stop
        </button>

        <button
          onClick={resetTimer}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>

      </div>
    </div>
  );
}

export default Timer;
