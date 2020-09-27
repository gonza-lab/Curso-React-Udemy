import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { todoDefault } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp />', () => {
  let wrapper;
  Storage.prototype.setItem = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<TodoApp />);
  });

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe agregar un todo', () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(todoDefault[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(todoDefault[1]);
    });

    expect(wrapper.find('h1').text()).toBe('TodoApp ( 2 ) ');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });
});
