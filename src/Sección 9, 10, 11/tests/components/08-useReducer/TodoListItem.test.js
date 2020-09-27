import { shallow } from 'enzyme';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { todoDefault } from '../../fixtures/demoTodos';

const props = {
  todo: todoDefault[0],
  index: 1,
  handleDelete: jest.fn(),
  handleToggle: jest.fn(),
};

describe('Pruebas en <TodoListItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TodoListItem {...props} />);
  });

  test('Debe mostrar el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe llamar a la funcion borrar', () => {
    const { handleDelete } = props;

    wrapper.find('.btn').simulate('click');
    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(props.todo.id);
  });

  test('Debe llamar a la funcion toggle', () => {
    const { handleToggle } = props;

    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith(props.todo.id);
  });

  test('Debe de mostrar el texto', () => {
    let pText = wrapper.find('p').text().trim();
    expect(pText).toBe(`${props.index + 1}. ${props.todo.desc}`);
  });

  test('Debe de tener la clase complete en el caso de que la tarea se encuentre hecha', () => {
    let wrapper = shallow(
      <TodoListItem {...{ ...props, todo: todoDefault[1] }} />
    );

    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
});
