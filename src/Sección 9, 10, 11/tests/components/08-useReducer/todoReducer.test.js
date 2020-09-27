import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { todoDefault, todoNew } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer.js', () => {
  test('Debe de retonar el estado por defecto', () => {
    expect(todoReducer(todoDefault, {})).toEqual(todoDefault);
  });

  test('Debe agregar un todo', () => {
    expect(
      todoReducer(todoDefault, { type: 'add', payload: todoNew })
    ).toEqual([...todoDefault, todoNew]);
  });

  test('Debe eliminar un todo', () => {
    const id = 1;
    expect(todoReducer(todoDefault, { type: 'delete', payload: id })).toEqual([
      todoDefault[1],
    ]);
  });

  test('Debe cambiar el valor del done', () => {
    const id = 1;
    const result = todoReducer(todoDefault, { type: 'toggle', payload: id });

    expect(result).toEqual(
      todoDefault.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
    expect(result[0].done).toBe(true);
    expect(result.length).toBe(todoDefault.length);
  });
});
