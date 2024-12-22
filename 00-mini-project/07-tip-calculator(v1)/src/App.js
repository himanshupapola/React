import { useState } from "react";

export default function App() {
  const [total, setTotal] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const avg = (total * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setTotal(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <>
      <Bill total={total} handleTotal={setTotal} />
      <Quality percentage={percentage1} setPercentage={setPercentage1}>
        How did u like the service?
      </Quality>
      <Quality percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service?
      </Quality>
      <FinalBill total={total} tip={avg} />
      <Reset handleReset={handleReset} />
    </>
  );
}

function Bill({ total, handleTotal }) {
  return (
    <>
      <p>
        How much was bill?{" "}
        <input
          type="text"
          placeholder="Bill value"
          value={total}
          onChange={(e) => handleTotal(+e.target.value)}
        />
      </p>
    </>
  );
}

function Quality({ children, percentage, setPercentage }) {
  return (
    <>
      <p>
        <label>{children}</label>
        <select
          value={percentage}
          onChange={(e) => setPercentage(+e.target.value)}
        >
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was ok(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely Amazing(20%)</option>
        </select>
      </p>
    </>
  );
}

function FinalBill({ total, tip }) {
  return (
    <>
      <h3>{`You pay ${total + tip} (${total} + ${tip} tip)`}</h3>
    </>
  );
}

function Reset({ handleReset }) {
  return (
    <>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
