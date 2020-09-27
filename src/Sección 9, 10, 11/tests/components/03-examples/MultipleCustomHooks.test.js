import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');

describe('Pruebas en MultipleCustomHooks', () => {
  test('Debe mostrar el componente correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    expect(shallow(<MultipleCustomHooks />)).toMatchSnapshot();
  });

  test('Debe mostrar la informacion correctamente', () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote: 'Si estas triste, deja de estar triste',
          author: 'Gonzalo Flores',
        },
      ],
      isLoading: false,
      error: null,
    });
    expect(shallow(<MultipleCustomHooks />)).toMatchSnapshot();
  });
});
