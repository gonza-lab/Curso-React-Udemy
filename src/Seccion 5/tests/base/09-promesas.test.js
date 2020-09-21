import { getHeroeByIdAsync } from '../../../Seccion 4 - CounterApp/base-pruebas/09-promesas.js';

describe('Pruebas en 09-promesas.test.js', () => {
  test('getHeroeByIdAsync - Debe retornar un heroe', (done) => {
    getHeroeByIdAsync(1)
      .then((heroe) => {
        expect(heroe).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC',
        });

        done();
      })
      .catch((e) => {
        expect(e).not.toBe('No se pudo encontrar el héroe');
        done();
      });
  });

  test('getHeroeByIdAsync - Debe retornar un error', (done) => {
    getHeroeByIdAsync(6).catch((heroe) => {
      expect(heroe).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
