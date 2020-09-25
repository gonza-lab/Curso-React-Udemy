import React, { useEffect, useState } from 'react';
import { InputForm } from './InputForm';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    isSend: false,
  });

  const { name, email, isSend } = formState;

  useEffect(() => {
    console.log('Montado del componente');
  }, []);

  useEffect(() => {
    console.log('Montado o cambio de formState');
  }, [formState]);

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h1>useEffect</h1>
      <hr />
      {!isSend && (
        <div>
          <InputForm name="name" onChange={handleChange} value={name} />
          <InputForm name="email" onChange={handleChange} value={email} />
        </div>
      )}
      <button
        className="btn btn-success"
        onClick={() => {
          setFormState({
            ...formState,
            isSend: !isSend,
          });
        }}
      >
        Send
      </button>
    </div>
  );
};
