import { useReducer, useState } from "react";

function reducer(state, action) {
  console.log(state, action);
  if (action.type === "inc") return state + 1; // Increment the state by 1
  if (action.type === "dec") return state - 1; // Decrement the state by 1
  if (action.type === "setCount") return action.payload; // Set the state to a specific value
}

export default function DateCounter() {
  
  const [count, dispatch] = useReducer(reducer, 0);


  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // Function to decrement the counter
  const dec = function () {
    // Dispatching an action with type "dec"
    dispatch({ type: "dec" });
  };

  // Function to increment the counter
  const inc = function () {
    // Dispatching an action with type "inc"
    dispatch({ type: "inc" });
  };

  // Function to set the counter to a specific value
  const defineCount = function (e) {
    // Dispatching an action with type "setCount" and a payload
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  // Function to update the step value
  const defineStep = function (e) {
    //setStep(Number(e.target.value));
  };

  // Function to reset the counter and step to their initial values
  const reset = function () {
    // Dispatching an action to reset the state would be ideal if needed, but here we're only resetting the step value.
    //setStep(1);
  };

  return (
    <div className="counter">
      {/* Step input to adjust the increment/decrement step */}
      <div>
        <input
          type="range"
          min="0"
          max="10"
          // value={step}
          onChange={defineStep}
        />
        {/* <span>{step}</span> */}
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
