import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { userDefault } from '../../fixtures/demoUsers';

describe('Pruebas en <HomeScreen />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <UserContext.Provider value={{ user: userDefault }}>
        <HomeScreen />
      </UserContext.Provider>
    );
  });

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
