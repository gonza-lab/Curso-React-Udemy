import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RealExampleRef />);
  });

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('Debe mostrar el componente <MultipleCustomHooks /> correctamente', () => {
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    wrapper.find('.btn').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
