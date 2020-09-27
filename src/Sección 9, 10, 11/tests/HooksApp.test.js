import React from 'react'
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('Pruebas en HooksApp', () => {
  test('Debe mostrar el componente correctamente', () => {
    expect(shallow(<HooksApp />)).toMatchSnapshot();
  });
});
