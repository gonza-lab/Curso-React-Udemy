import { getHeroesByOwner } from '../../../Seccion 4 - CounterApp/base-pruebas/08-imp-exp.js';

describe('Pruebas en 08-imp-exp.test.js', () => {
  test('getHeroesByOwner - Debe retornar un arreglo con los heroes de Marvel', () => {
    expect(getHeroesByOwner('Marvel')).toHaveLength(2);
  });

  test('getHeroesByOwner - Debe retornar un arreglo con los heroes de DC', () => {
    expect(getHeroesByOwner('DC')).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC',
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC',
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC',
      },
    ]);
  });
});
