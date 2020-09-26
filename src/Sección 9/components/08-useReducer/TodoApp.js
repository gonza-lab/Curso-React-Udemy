import React, { useEffect, useReducer } from 'react';
import { TodoList } from './TodoList';

import { useForm } from '../../hooks/useForm';
import { todoReducer } from './todoReducer';

import './TodoApp.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [values, handleIChange, reset] = useForm({ desc: '' });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (values.desc.trim().length <= 1) {
      return;
    }

    const action = {
      type: 'add',
      payload: {
        id: new Date().getTime(),
        desc: values.desc,
        done: false,
      },
    };

    dispatch(action);
    reset();
  };

  const handleDelete = (id) => {
    dispatch({
      type: 'delete',
      payload: id,
    });
  };

  const handleToggle = (id) => {
    dispatch({
      type: 'toggle',
      payload: id,
    });
  };

  const propsApp = {
    todos,
    handleAdd,
    handleIChange,
    handleDelete,
    handleToggle,
    value: values,
  };

  return (
    <div>
      <h1>TodoApp</h1>
      <hr />
      <TodoList {...propsApp} />
    </div>
  );
};
