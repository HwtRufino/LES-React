import { useState } from "react";
import voltar from "../voltar";

let initialCounters = [0, 0, 0];

export default function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      <>
        <voltar /> <br />
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}
            <button
              onClick={() => {
                handleIncrementClick(i);
              }}
            >
              +1
            </button>
          </li>
        ))}
      </>
    </ul>
  );
}
