import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="counter">
      <h2>Counter</h2>

      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;