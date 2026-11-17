
import { useState } from 'react';

function ChildComponent({ count, onIncrement, onDecrement }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increase</button>
      <button onClick={onDecrement}>Decrease</button>
    </div>
  );
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Lifting State Up</h2>
      <p>The parent component owns the shared state.</p>

      <ChildComponent
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
      />
    </div>
  );
}

export default ParentComponent;
