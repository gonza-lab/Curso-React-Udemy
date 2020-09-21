import getSaludo from '../../../Seccion 4 - CounterApp/base-pruebas/02-template-string.js';

describe('Pruebas en el archivo template-string.test.js', () => {
  test('getSaludo deberia retornar Hola Gonzalo', () => {
    expect(getSaludo('Gonzalo')).toBe('Hola Gonzalo');
  });

  test('getSaludo deberia retornar sin argumento Hola Gonzalo!', () => {
    expect(getSaludo()).toBe('Hola Gonzalo!');
  });
});
