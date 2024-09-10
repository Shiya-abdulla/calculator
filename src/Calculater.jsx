import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reset } from './redux/slice';// Import the reset action

function Calculater() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null); // State to hold the result

  const handleCalculate = () => {
   
      // Evaluate the mathematical expression entered by the user
      const evalResult = eval(input); // Calculate the result
      setResult(evalResult); // Update the result state with the evaluated value
  }

  const handleClear = () => {
    setInput('');
    setResult(null); // Clear the result state
    dispatch(reset()); // Reset the Redux state
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <div className="w-75 p-5 border border-4 border-light"
           style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adds shadow to the container
            borderRadius: '8px', // Optional: adds rounded corners
          }}
          >
          <input
            type="text"
            placeholder="Enter your Expression (e.g., 5*5)"
            className="form-control mb-3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-success me-3" onClick={handleCalculate}>
              Calculate
            </button>
            <button className="btn btn-danger" onClick={handleClear}>
              Clear
            </button>
          </div>
          <h3 className="mt-3">Result: {result !== null ? result : 'No result'}</h3>
        </div>
      </div>
    </>
  );
}

export default Calculater;
