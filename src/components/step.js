import { useState } from "react";

export default function Step() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function resetAll() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <input
        type="range"
        min={0}
        max={20}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>{step}</span> <br />
      <div>
        <button
          className="px-2 m-1 bg-slate-400 "
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <input
          className="text-black text-center"
          type="text"
          value={Math.abs(count)}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          className="px-2 m-1 bg-slate-400"
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago from today was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <br />
      {count !== 0 || step !== 1 ? (
        <button onClick={resetAll}>reset</button>
      ) : null}
    </div>
  );
}
