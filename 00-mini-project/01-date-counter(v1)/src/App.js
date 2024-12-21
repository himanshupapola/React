import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepBack() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleCountBack() {
    if (count > 0) setCount((c) => c - step);
  }

  return (
    <>
      <div>
        <button onClick={handleStepBack}>-</button>Step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={handleCountBack}>-</button>Count: {count}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        {count === 0
          ? `Today date is ${date.toDateString()}`
          : `${count} days from today is ${date.toDateString()}`}
      </div>
    </>
  );
}
