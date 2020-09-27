import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { todoDefault } from '../../fixtures/demoTodos';

describe('Pruenas en <TodoList />', () => {
  let wrapper;
  let props = {
    todos: todoDefault,
    handleDelete: jest.fn(),
    handleToggle: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<TodoList {...props} />);
  });

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar los TodoListItem adecuados', () => {
    expect(wrapper.find('TodoListItem').length).toBe(todoDefault.length);
  });

  test('Debe mostrar los TodoListItem con sus props adecuadas', () => {
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    );

    expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(
      expect.any(Function)
    );
  });
});
