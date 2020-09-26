import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  const [counter, icr] = useCounter(1);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={icr}>
        Increment +1
      </button>

      <button
        className="btn btn-outline-primary ml-2"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
