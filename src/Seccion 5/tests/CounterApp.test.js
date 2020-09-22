import CounterApp from '../../Seccion 4 - CounterApp/CounterApp';
import React from 'react';
import { shallow } from 'enzyme';

describe('Pruebas en CounterApp', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar el valor por defecto 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    expect(wrapper.find('h2').text()).toBe(`${value}`);
  });

  test('Debe incrementar el valor +1', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('h2').text()).toBe('11');
  });

  test('Debe incrementar el valor -1', () => {
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.find('h2').text()).toBe('9');
  });

  test('Debe resetear el valor', () => {
    const wrapper = shallow(<CounterApp value={105} />);
    const buttons = wrapper.find('button');
    buttons.at(0).simulate('click');
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');
    expect(wrapper.find('h2').text()).toBe('105');
  });
});
