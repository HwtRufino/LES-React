import { useState } from "react";
import voltar from "../voltar";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <voltar /> <br />
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
          setNumber(42);
        }}
      >
        Increment Number
      </button>
    </>
  );
}
