import { useState } from "react";

// Write a react component that will display the current value of our counter.
//     The counter should start at 0.
//     There should be a button to add 1.
//     There should also be a button to subtract 1.

function SimpleCounter() {
  let [counter, setCounter] = useState(0);

  function handleAddOneClick(e) {
    setCounter(counter + 1);
  }
  function handleSubtractOneClick(e) {
    setCounter(counter - 1);
  }

  return (
    <>
      <div className="flex justify-center space-x-2">
        <button className="inline-block" onClick={handleSubtractOneClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
            />
          </svg>
        </button>
        <div className="inline-block">{counter}</div>
        <button className="inline-block" onClick={handleAddOneClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default SimpleCounter;
