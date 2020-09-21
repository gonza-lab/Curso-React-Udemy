import { retornaArreglo } from '../../../Seccion 4 - CounterApp/base-pruebas/07-deses-arr.js';

describe('Pruebas en 07-deses-arr', () => {
  test('retornaArreglo - Debe retornar un string y un numero', () => {
    const [string, number] = retornaArreglo();
    console.log(string);

    expect(typeof number).toBe('number');
    expect(typeof string).toBe('string');
  });
});
