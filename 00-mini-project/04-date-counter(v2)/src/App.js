import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
// main probelm is creating a controlled element of react

function Counter() {
  const [step, setStep] = useState(1);

  // step 1 creaet the react state
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleCountBack() {
    if (count > 0) setCount((c) => c - step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />{" "}
        {step}
      </div>
      <div>
        <button onClick={handleCountBack}>-</button>
        {/* Step 2: setting the vlaue and using onchange to handle controlled element thorugh react */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        ></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        {count === 0
          ? `Today date is ${date.toDateString()}`
          : `${count} days from today is ${date.toDateString()}`}
      </div>

      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : (
        ""
      )}
    </>
  );
}
