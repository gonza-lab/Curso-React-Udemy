import React from 'react';

export const BtnIncrement = React.memo(({ increment }) => {
  console.log('Me volvi a generar - BtnIncrement');

  return (
    <button className="btn btn-outline-primary" onClick={increment}>
      Incrementar +1
    </button>
  );
});
