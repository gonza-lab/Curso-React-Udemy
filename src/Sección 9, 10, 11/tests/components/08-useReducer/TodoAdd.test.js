import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {
  let wrapper;

  const handleAddTodo = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
  });

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('No debe llamar al handleAddTodo', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('Debe llamar a handleAddTodo y reset', () => {
    const value = 'Aprender jest';

    wrapper.find('input').simulate('change', {
      target: { name: 'description', value },
    });

    expect(wrapper.find('input').prop('value')).toBe(value);

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
