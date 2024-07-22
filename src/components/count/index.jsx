import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function handleIncreaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count</h1>
      <button onClick={handleIncreaseCount}>Increase Count</button>
      <span>{count}</span>
    </div>
  );
}
