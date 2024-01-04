import { useReducer } from "react";

const initiakState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "dec":
      return { count: state.count - 1 };
    case "inc":
      return { count: state.count + 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initiakState);

  return (
    <>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "reset", payLoad: 0 })}>
        Reset
      </button>
    </>
  );
}
export default CounterWithReducer;
