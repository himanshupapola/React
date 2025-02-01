import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unkown action");
  }
}

export default function DateCounter() {
  // Managing two state together

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // Function to decrement the counter
  const dec = function () {
    dispatch({ type: "dec" });
  };

  // Function to increment the counter
  const inc = function () {
    dispatch({ type: "inc" });
  };

  // Function to set the counter to a specific value
  const defineCount = function (e) {
    // Dispatching an action with type "setCount" and a payload
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  // Function to update the step value
  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  // Function to reset the counter and step to their initial values
  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      {/* Step input to adjust the increment/decrement step */}
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      {/* Counter controls */}
      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      {/* Display the calculated date */}
      <p>{date.toDateString()}</p>

      {/* Reset button */}
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
