import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './Layout.css';

export const Layout = ({ id = 1 }) => {
  const [counter, incr] = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pRef = useRef();

  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote">
        <p ref={pRef} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <button className="btn btn-success" onClick={incr}>
        Siguiente frase
      </button>
    </div>
  );
};
