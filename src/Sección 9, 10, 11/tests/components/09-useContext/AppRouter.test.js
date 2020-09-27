import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { userDefault } from '../../fixtures/demoUsers';

describe('Pruebas en <AppRouter />', () => {
  let wrapper;
  const setUser = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <UserContext.Provider value={{ userDefault, setUser }}>
        <AppRouter />
      </UserContext.Provider>
    );
  });

  test('Debe mostrarse el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
