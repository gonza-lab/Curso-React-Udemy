import PrimeraApp from '../../Seccion 4 - CounterApp/PrimeraApp.js';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
  test('Debe de mostrar el componente correctamente', () => {
    const saludo = 'Hola, Soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar el subtitulo correctamente', () => {
    const saludo = 'Hola, Soy Goku';
    const subtitulo = 'Soy un subtitulo';

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    expect(wrapper.find('p').text()).toBe(subtitulo);
  });
});
