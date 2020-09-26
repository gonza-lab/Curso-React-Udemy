import React from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoItem } from './TodoItem';

export const TodoList = ({
  todos,
  handleAdd,
  handleIChange,
  value,
  handleDelete,
  handleToggle,
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
      <TodoAdd
        handleAdd={handleAdd}
        handleIChange={handleIChange}
        value={value}
      />
    </ul>
  );
};
