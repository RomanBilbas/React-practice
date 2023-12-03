import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function decrement(e) {
    setCount(count - 1);
  }

  function increment(e) {
    setCount(count + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
