import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date("May 18 2024");
  date.setDate(date.getDate() + count);
  return (
    <div className="App">
      <div className="container">
        <button
          onClick={() => {
            setStep((prevstep) => {
              return prevstep - 1; // Corrected here
            });
          }}
        >
          -
        </button>
        <span>Step: {step}</span>
        <button
          onClick={() => {
            setStep((prevstep) => {
              return prevstep + 1; // Corrected here
            });
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            setCount((prevcount) => {
              return prevcount - step; // Corrected here
            });
          }}
        >
          -
        </button>
        <span>Count: {count}</span>
        <button
          onClick={() => {
            setCount((prevcount) => {
              return prevcount + step; // Corrected here
            });
          }}
        >
          +
        </button>
      </div>
      <p className="text">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
