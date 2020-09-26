import React from 'react';

export const TodoAdd = ({ handleAdd, handleIChange, value }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input
        className="form-control"
        type="text"
        name="desc"
        value={value.desc}
        onChange={handleIChange}
      />
      <button className="btn btn-primary" onClick={handleAdd}>
        Añadir todo
      </button>
    </li>
  );
};
