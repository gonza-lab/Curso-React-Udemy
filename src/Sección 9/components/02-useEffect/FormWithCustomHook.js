import React from 'react';
import { useForm } from '../../hooks/useForm';
import { InputForm } from './InputForm';

export const FormWithCustomHook = () => {
  const [formValues, setFormState] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
      <h1>FormWithCustomHook</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <InputForm name="name" onChange={setFormState} value={name} />
        <InputForm name="email" onChange={setFormState} value={email} />
        <InputForm
          name="password"
          onChange={setFormState}
          value={password}
          type="password"
        />
        <button type="submit" className="btn btn-success">Enviar !</button>
      </form>
    </div>
  );
};
