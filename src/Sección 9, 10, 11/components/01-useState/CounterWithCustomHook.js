import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counterWithCustomHook.css';

export const CounterWithCustomHook = () => {
  const [counter, incr, res, decr] = useCounter();

  return (
    <div>
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={incr}>
        + 1
      </button>
      <button className="btn btn-danger" onClick={res}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={decr}>
        - 1
      </button>
    </div>
  );
};
