import { getImagen } from '../../../Seccion 4 - CounterApp/base-pruebas/11-async-await.js';

describe('Pruebas en 11-async-await.test.js', () => {
  test('getImagen - Debe retornar el url de la imagen', async () => {
    const url = await getImagen();

    expect(typeof url).toBe('string');
  });
});
