import { useState } from "react";

function LoginForm() {
  const [test, setTest] = useState("");

  return (
    <div>
      <input
        name="test"
        onChange={(e) => {
          setTest(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTest("");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default LoginForm;
