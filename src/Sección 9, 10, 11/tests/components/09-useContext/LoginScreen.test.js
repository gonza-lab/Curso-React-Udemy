import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <LoginScreen />', () => {
  let wrapper;
  let setUser = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <UserContext.Provider value={{ setUser }}>
        <LoginScreen />
      </UserContext.Provider>
    );
  });

  test('Debe mostrar el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe ejecutar setUser con el argumento esperado', () => {
    wrapper.find('.btn').simulate('click');
    expect(setUser).toHaveBeenCalledWith({ id: 123, name: 'Gonzalo' });
  });
});
