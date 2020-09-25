import React, { useCallback, useState } from 'react';
import { BtnIncrement } from './BtnIncrement';

export const CallBackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter]);

  

  return (
    <div>
      <h1>useCallback Hook</h1>
      <h3>Counter {counter}</h3>
      <hr />
      <BtnIncrement increment={increment} />
    </div>
  );
};
