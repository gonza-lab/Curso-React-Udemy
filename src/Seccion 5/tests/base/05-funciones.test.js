import {
  getUser,
  getUserActivo,
} from '../../../Seccion 4 - CounterApp/base-pruebas/05-funciones.js';

describe('Pruebas en 05-funciones.js', () => {
  test('getUser - Debe retornar un objeto', () => {
    const user = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    expect(getUser()).toEqual(user);
  });

  test('getUserActivo - Debe retornar un objeto', () => {
    const nombre = 'Gonzalo';
    const response = {
      uid: 'ABC567',
      username: nombre,
    };

    expect(getUserActivo(nombre)).toEqual(response);
  });
});
