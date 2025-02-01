import React from "react";

export default function FinishScreen({ points, maxPossibePoints, highScore, dispatch }) {
  const percentage = (points / maxPossibePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossibePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} Points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Reset
      </button>
    </>
  );
}
