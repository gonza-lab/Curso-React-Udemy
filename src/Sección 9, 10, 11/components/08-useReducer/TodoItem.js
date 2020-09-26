import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

export const TodoItem = ({ todo }) => {
  const { handleDelete, handleToggle } = useContext(TodoContext);

  return (
    <li className="todo-item list-group-item d-flex justify-content-between align-items-center">
      <p onClick={() => handleDelete(todo.id)}>{todo.desc}</p>
      <span
        className={`badge badge-${todo.done ? 'success' : 'danger'} badge-pill`}
        onClick={() => handleToggle(todo.id)}
      >
        {todo.done ? 'Finalizado' : 'Por terminar'}
      </span>
    </li>
  );
};
