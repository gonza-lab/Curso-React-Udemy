import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
  test('Debe retornar el contador por defecto', () => {
    const { result } = renderHook(() => useCounter());

    const [value] = result.current;

    expect(value).toBe(0);
  });

  test('Debe retornar el contador por defecto que le damos', () => {
    const { result } = renderHook(() => useCounter(10));
    const [value] = result.current;

    expect(value).toBe(10);
  });

  test('Debe retornar las funciones correspondientes', () => {
    const { result } = renderHook(() => useCounter(10));
    const [, icr, res, dcr] = result.current;

    expect(typeof icr).toBe('function');
    expect(typeof res).toBe('function');
    expect(typeof dcr).toBe('function');
  });

  test('Debe de incrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(10));
    const [, icr] = result.current;

    act(() => {
      icr();
    });

    const [value] = result.current;

    expect(value).toBe(11);
  });

  test('Debe de decrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(10));
    const [, , , dcr] = result.current;

    act(() => {
      dcr();
    });

    const [value] = result.current;

    expect(value).toBe(9);
  });

  test('Debe volver al valor por defect', () => {
    const { result } = renderHook(() => useCounter(50));
    const [, icr, res, dcr] = result.current;

    act(() => {
      icr();
      res();
    });

    const [value] = result.current;

    expect(value).toBe(50);
  });
});
